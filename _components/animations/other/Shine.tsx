// Color props use theme token names (eg. "accent", "foreground-muted", "border/70%")

//** Recommended color props:
// * White to silver:
// # default prop
//* Black to silver:
// # firstColor="background" secondColor="foreground-muted/60%"
// * White to black:
// # firstColor="foreground-muted" secondColor="border"

type Props = {
  children: React.ReactNode;
  className?: string;
  firstColor?: string;
  secondColor?: string;
};

// to allow for changes in color opacity within props
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
    <span
      className={`${className} animate-shine tracking-tight bg-clip-text! text-transparent`}
      style={{
        background: `radial-gradient(circle at center, ${themeColor(secondColor)}, transparent) -200% 50% / 200% 100% no-repeat, ${themeColor(firstColor)}`,
      }}
    >
      {children}
    </span>
  );
}

export default Shine;
