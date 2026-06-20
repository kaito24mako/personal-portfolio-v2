// Color props use theme token names (eg. "accent", "foreground-muted", "border/70%")

// Recommended color props:
// - black to white/silver

type Props = {
  children: React.ReactNode;
  className?: string;
  firstColor?: string;
  secondColor?: string;
};

function themeColor(token: string): string {
  const slashIndex = token.indexOf("/");

  if (slashIndex === -1) {
    return `var(--color-${token})`;
  }

  const name = token.slice(0, slashIndex);
  const opacity = token.slice(slashIndex + 1);

  return `color-mix(in oklab, var(--color-${name}) ${opacity}, transparent)`;
}

function Shine({
  children,
  className = "",
  firstColor = "foreground-muted",
  secondColor = "foreground/85%",
}: Props) {
  return (
    <p
      className={`${className} animate-shine tracking-tight bg-clip-text! text-transparent`}
      style={{
        background: `radial-gradient(circle at center, ${themeColor(secondColor)}, transparent) -200% 50% / 200% 100% no-repeat, ${themeColor(firstColor)}`,
      }}
    >
      {children}
    </p>
  );
}

export default Shine;
