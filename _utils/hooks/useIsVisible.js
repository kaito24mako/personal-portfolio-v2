import { useState, useEffect } from "react";

export default function useIsVisible(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    // create an IntersectionObserver to observe the ref's visibility
    const observer = new IntersectionObserver(([entry]) =>
      setIsIntersecting(entry.isIntersecting),
    );

    const element = ref.current;
    if (!element) return;

    // start observing the element
    observer.observe(element);

    // cleanup when component unmounts or ref changes
    return () => {
      observer.unobserve(element);
    };
  }, [ref]);

  return isIntersecting;
}

//** How to use (in a component that you want to track for conditional rendering/styling)

//* Create a ref for the element that should trigger the intended change
//# const ref = useRef < HTMLElement > null;

//* Pass it into the useIsVisible hook to determine if it's in view
// The hook will return true or false which is used for conditional rendering/styling
//# const isRefVisible = useIsVisible(ref);

//* Add ref to the element you want to observe
//# <div ref={ref}>

//* Conditionally render/style if the ref is visible
//# {isRefVisible && <p>This text will show when the element with ref enters the viewport!</p>}
