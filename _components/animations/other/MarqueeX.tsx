type Props = {
  contents: string[];
  color?: "primary" | "secondary" | "accent" | "muted" | "custom";
  size?: "xl" | "lg" | "md" | "sm" | "xs" | "custom";
  italic?: boolean;
  containerStyle?: string;
  textStyle?: string;
};

function MarqueeX({
  contents,
  color = "custom",
  size = "custom",
  italic = false,
  containerStyle,
  textStyle,
}: Props) {
  const colorClasses = {
    primary: "text-foreground",
    secondary: "text-background",
    accent: "text-accent",
    muted: "text-border/60",
    custom: "",
  };

  const sizeClasses = {
    xl: "text-7xl md:text-8xl",
    lg: "text-5xl md:text-6xl",
    md: "text-3xl md:text-4xl",
    sm: "text-xl md:text-2xl",
    xs: "text-base md:text-lg",
    custom: "",
  };

  return (
    <div className={`${containerStyle} overflow-hidden w-full`}>
      <div
        className={`${colorClasses[color]} ${italic && "italic"} flex w-max animate-marquee`}
      >
        <div
          className={`${sizeClasses[size]} ${textStyle} flex justify-around gap-8 pr-8`}
        >
          {contents.map((content, index) => (
            <p key={index}>{content}</p>
          ))}
        </div>
        <div
          aria-hidden="true"
          className={`${sizeClasses[size]} ${textStyle} flex justify-around gap-8 pr-8`}
        >
          {contents.map((content, index) => (
            <p key={index}>{content}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MarqueeX;
