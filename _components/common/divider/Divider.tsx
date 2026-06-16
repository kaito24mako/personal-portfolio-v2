type Props = {
  className?: string;
};

function Divider({ className = "" }: Props) {
  return <span className={`h-px bg-border ${className}`} />;
}

export default Divider;
