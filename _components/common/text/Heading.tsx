type Props = {
  children: React.ReactNode;
  className?: string;
  color?: "primary" | "secondary" | "accent" | "none";
  size?: "xl" | "lg" | "md" | "sm" | "none";
};

function Heading({
  children,
  className,
  color = "none",
  size = "none",
}: Props) {
  const colorClasses = {
    primary: "text-foreground",
    secondary: "text-background",
    accent: "text-accent",
    none: "",
  };

  const sizeClasses = {
    xl: "text-7xl md:text-8xl",
    lg: "text-5xl md:text-7xl",
    md: "text-5xl md:text-6xl",
    sm: "text-4xl md:text-5xl",
    none: "",
  };

  return (
    <h1
      className={`font-heading ${colorClasses[color]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </h1>
  );
}

export default Heading;
