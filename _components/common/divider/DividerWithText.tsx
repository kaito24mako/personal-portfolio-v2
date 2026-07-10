type Props = {
  children: React.ReactNode;
  className?: string;
  dividerStyle?: string;
  textStyle?: string;
  dividerColor?: string;
  textColor?: string;
  height?: "small" | "medium" | "large";
  opacity?: "low" | "medium" | "high";
};

function DividerWithText({
  children,
  className,
  dividerStyle,
  dividerColor = "bg-background",
  textStyle,
  textColor = "text-background",
  height = "small",
  opacity = "high",
}: Props) {
  const heightClasses = {
    small: "h-px",
    medium: "h-[2px]",
    large: "h-[3px]",
  };

  const opacityClasses = {
    low: "opacity-30",
    medium: "opacity-60",
    high: "opacity-100",
  };

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div
        className={`${dividerStyle} ${dividerColor} ${opacityClasses[opacity]} ${heightClasses[height]} flex-1`}
      />
      <span className={`${textStyle} ${textColor}`}>{children}</span>
      <div
        className={`${dividerStyle} ${dividerColor} ${opacityClasses[opacity]} ${heightClasses[height]} flex-1`}
      />
    </div>
  );
}

export default DividerWithText;
