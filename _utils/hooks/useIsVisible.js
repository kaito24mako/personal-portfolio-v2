import { useState, useEffect } from "react";

export default function useIsVisible(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    // create an IntersectionObserver to observe the ref's visibility
    const observer = new IntersectionObserver(([entry]) =>
      setIsIntersecting(entry.isIntersecting),
    );

    // start observing the element
    observer.observe(ref.current);

    // cleanup when component unmounts or ref changes
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}
