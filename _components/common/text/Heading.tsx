type Props = {
  children: React.ReactNode;
  className?: string;
};

function Heading({ children, className = "" }: Props) {
  return (
    <h1
      className={`font-heading font-semibold text-accent text-5xl ${className}`}
    >
      {children}
    </h1>
  );
}

export default Heading;
