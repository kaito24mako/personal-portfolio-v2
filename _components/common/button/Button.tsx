import Link from "next/link";

// to allow for button attributes (like onClick)
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
  size?: "small" | "medium" | "large";
  color?: "background" | "surface" | "accent" | "transparent" | "none";
  href?: string;
  toNewTab?: boolean;
  ariaLabel?: string;
};

function Button({
  children,
  className,
  size = "medium",
  color = "none",
  href,
  toNewTab = false,
  ariaLabel,
  ...props
}: Props) {
  const sizeClasses = {
    small: "text-sm py-2 px-3",
    medium: "text-base py-2 px-3",
    large: "text-lg py-3 px-4",
  };

  const colorClasses = {
    background: "bg-background hover:bg-background/80",
    surface: "bg-surface hover:bg-surface/80",
    accent: "bg-accent-dark hover:bg-accent-dark/80",
    transparent: "bg-transparent",
    none: "",
  };

  if (href) {
    return (
      <Link
        href={href}
        target={toNewTab ? "_blank" : undefined}
        aria-label={ariaLabel}
        className={`${sizeClasses[size]} ${colorClasses[color]} ${className} rounded-md`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={`${sizeClasses[size]} ${colorClasses[color]} ${className} rounded-md`}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
