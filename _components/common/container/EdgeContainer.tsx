import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

function EdgeContainer({ children, className = "" }: Props) {
  return (
    <div
      className={`px-7 sm:px-25 md:px-40 xl:px-60 3xl:px-100 py-4 ${className}`}
    >
      {children}
    </div>
  );
}

export default EdgeContainer;
