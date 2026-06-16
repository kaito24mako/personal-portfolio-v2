type Props = {
  children: React.ReactNode;
  className?: string;
};

function DividerWithText({ children, className = "" }: Props) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="h-px flex-1 bg-border" />
      <span className="text-background">{children}</span>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}

export default DividerWithText;
