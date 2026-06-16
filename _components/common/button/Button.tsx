import React from "react";

type Props = {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  color?: "background" | "surface" | "accent" | "custom";
};

function Button({ children, size = "medium", color = "custom" }: Props) {
  const sizeClasses = {
    small: "text-sm p-2",
    medium: "text-base p-2",
    large: "text-lg p-3",
  };

  const colorClasses = {
    background: "bg-background hover:bg-background/80",
    surface: "bg-surface hover:bg-surface/80",
    accent: "bg-accent-dark hover:bg-accent-dark/80",
    custom: "",
  };

  return (
    <button
      className={`${sizeClasses[size]} ${colorClasses[color]} rounded-md`}
    >
      {children}
    </button>
  );
}

export default Button;
