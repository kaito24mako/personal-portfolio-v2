type Props = {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  color?: string;
};

function Badge({ children, size = "medium", color }: Props) {
  const sizeClasses = {
    small: "text-xs rounded-sm",
    medium: "text-sm rounded-md",
    large: "text-base rounded-lg",
  };

  return (
    <div className={`${sizeClasses[size]} ${color} px-3 py-1.5 bg-background`}>
      {children}
    </div>
  );
}

export default Badge;
