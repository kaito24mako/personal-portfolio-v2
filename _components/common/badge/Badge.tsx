type Props = {
  children: React.ReactNode;
  className?: string;
  size?: "small" | "medium" | "large";
  textColor?: "background" | "foreground" | "surface" | "accent";
  bgColor?: "background" | "foreground" | "surface" | "accent";
  italic?: boolean;
};

// todo: staggered effect?

function Badge({
  children,
  className = "",
  size = "medium",
  textColor = "foreground",
  bgColor = "background",
  italic = false,
}: Props) {
  const sizeClasses = {
    small: "text-[10px] md:text-xs rounded-sm",
    medium: "text-xs md:text-sm rounded-md",
    large: "text-sm md:text-base rounded-lg",
  };

  const textColorClasses = {
    background: "text-background",
    foreground: "text-foreground-muted",
    surface: "text-surface",
    accent: "text-accent",
    invert: "text-background",
  };

  const bgColorClasses = {
    background: "bg-background",
    foreground: "bg-foreground-muted/80",
    surface: "bg-border",
    accent: "bg-accent",
  };

  return (
    <div
      className={`${sizeClasses[size]} ${textColorClasses[textColor]} ${bgColorClasses[bgColor]} ${className} ${italic && "italic"} px-3 py-1.5 rounded-xs `}
    >
      {children}
    </div>
  );
}

export default Badge;
