import React from "react";

// * Notes on component:
// Color props are the native CSS value of a color, not the tailwind class (eg. "accent", not "text-accent")

type Props = {
  children: React.ReactNode;
  className?: string;
  firstColor: string;
  secondColor: string;
};

function Shine({ children, className, firstColor, secondColor }: Props) {
  return (
    <h3
      className={`${className} animate-shine tracking-tight bg-clip-text! text-transparent [background:radial-gradient(circle_at_center,theme(colors.${secondColor}),transparent)_-200%_50%_/_200%_100%_no-repeat,theme(colors.${firstColor})]`}
    >
      {children}
    </h3>
  );
}

export default Shine;

// border/80%
