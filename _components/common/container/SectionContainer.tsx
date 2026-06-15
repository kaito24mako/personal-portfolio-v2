type Props = {
  children: React.ReactNode;
  className?: string;
};

function SectionContainer({ children, className = "" }: Props) {
  return (
    <div
      className={`px-7 sm:px-25 md:px-40 xl:px-60 3xl:px-100 py-20 ${className}`}
    >
      {children}
    </div>
  );
}

export default SectionContainer;
