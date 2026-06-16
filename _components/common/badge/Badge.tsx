type Props = {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  textColor?: "default" | "background" | "surface" | "accent";
  bgColor?: "background" | "surface" | "accent";
};

function Badge({
  children,
  size = "medium",
  textColor = "default",
  bgColor = "background",
}: Props) {
  const sizeClasses = {
    small: "text-xs rounded-sm",
    medium: "text-sm rounded-md",
    large: "text-base rounded-lg",
  };

  const textColorClasses = {
    default: "",
    background: "text-background",
    surface: "text-surface",
    accent: "text-accent",
  };

  const bgColorClasses = {
    background: "bg-background",
    surface: "bg-surface",
    accent: "bg-accent",
  };

  return (
    <div
      className={`${sizeClasses[size]} ${textColorClasses[textColor]} ${bgColorClasses[bgColor]} px-3 py-1.5`}
    >
      {children}
    </div>
  );
}

export default Badge;
