// * Use to wrap an icon and text inside the Button and Link components

type Props = {
  children: React.ReactNode;
  className?: string;
  gap?: "small" | "medium" | "large";
};

function IconTextWrapper({ children, className, gap = "medium" }: Props) {
  const gapClasses = { small: "gap-1", medium: "gap-2", large: "gap-3" };

  return (
    <div className={`${className} ${gapClasses[gap]} flex items-center`}>
      {children}
    </div>
  );
}

export default IconTextWrapper;
