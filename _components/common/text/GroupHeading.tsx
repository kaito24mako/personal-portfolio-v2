import Divider from "../divider/Divider";

type Props = {
  children: React.ReactNode;
  className?: string;
  heading: string;
};

function GroupHeading({ children, className, heading }: Props) {
  return (
    <div className={`${className} flex flex-col gap-0.5`}>
      <h3 className="font-semibold text-surface">{heading}</h3>
      <Divider opacity="low" />
      <div className="flex mx-auto lg:mx-0 gap-4 mt-1">{children}</div>
    </div>
  );
}

export default GroupHeading;
