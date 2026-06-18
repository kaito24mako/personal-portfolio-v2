type Props = {
  className?: string;
  color?: string;
  height?: "small" | "medium" | "large";
  opacity?: "low" | "medium" | "high";
};

function Divider({
  className = "",
  color = "bg-border",
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
    <span
      className={`${color} ${heightClasses[height]} ${color} ${opacityClasses[opacity]} ${className}`}
    />
  );
}

export default Divider;
