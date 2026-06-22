import Shine from "@/_components/animations/other/Shine";

function MarqueeItems({
  contents,
  rowClassName,
  ariaHidden,
  separator,
  shine,
}: {
  contents: string[];
  rowClassName: string;
  ariaHidden?: boolean;
  separator?: boolean;
  shine?: boolean;
}) {
  return (
    <div className="flex items-center gap-6 pr-6" aria-hidden={ariaHidden}>
      {contents.map((content, index) => (
        <span key={content} className="flex items-center gap-6 shrink-0">
          {/* for every second item, apply shine */}
          {shine && index % 2 === 0 ? (
            <Shine
              className={rowClassName}
              firstColor="foreground-muted/70%"
              secondColor="foreground/60%"
            >
              {content}
            </Shine>
          ) : (
            <span className={rowClassName}>{content}</span>
          )}
          {separator && (
            <span className="text-accent-dark text-xs" aria-hidden>
              //
            </span>
          )}
        </span>
      ))}
    </div>
  );
}

type Props = {
  contents: string[];
  color?: "primary" | "secondary" | "accent" | "muted" | "none";
  size?: "xl" | "lg" | "md" | "sm" | "xs" | "none";
  italic?: boolean;
  containerStyle?: string;
  textStyle?: string;
  fadeEdges?: boolean;
  separator?: boolean;
  shine?: boolean;
};

function MarqueeX({
  contents,
  color = "none",
  size = "none",
  italic = false,
  containerStyle,
  textStyle,
  fadeEdges = false,
  separator = false,
  shine = false,
}: Props) {
  const colorClasses = {
    primary: "text-foreground-muted/70",
    secondary: "text-background",
    accent: "text-accent",
    muted: "text-border/60",
    none: "",
  };

  const sizeClasses = {
    xl: "text-7xl md:text-8xl",
    lg: "text-5xl md:text-6xl",
    md: "text-3xl md:text-4xl",
    sm: "text-xl md:text-2xl",
    xs: "text-base md:text-lg",
    none: "",
  };

  const rowClassName = `${sizeClasses[size]} ${textStyle} ${colorClasses[color]} ${italic ? "italic" : ""}`;

  const fadeMask =
    "[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]";

  return (
    <div
      className={`${containerStyle} ${fadeEdges ? fadeMask : ""} overflow-hidden w-full`}
    >
      <div className="flex w-max animate-marquee">
        <MarqueeItems
          contents={contents}
          rowClassName={rowClassName}
          separator={separator}
          shine={shine}
        />
        <MarqueeItems
          contents={contents}
          rowClassName={rowClassName}
          separator={separator}
          shine={shine}
          ariaHidden
        />
      </div>
    </div>
  );
}

export default MarqueeX;
