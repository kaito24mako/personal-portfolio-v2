type Props = {
  children: React.ReactNode;
  className?: string;
  color?: "primary" | "secondary" | "accent" | "custom";
  size?: "xl" | "lg" | "md" | "sm" | "custom";
};

function Heading({
  children,
  className,
  color = "custom",
  size = "custom",
}: Props) {
  const colorClasses = {
    primary: "text-foreground",
    secondary: "text-background",
    accent: "text-accent",
    custom: "",
  };

  const sizeClasses = {
    xl: "text-7xl md:text-8xl",
    lg: "text-6xl md:text-7xl",
    md: "text-5xl md:text-6xl",
    sm: "text-4xl md:text-5xl",
    custom: "",
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
