import Divider from "../divider/Divider";

type Props = {
  children: React.ReactNode;
  heading: string;
};

function GroupHeading({ children, heading }: Props) {
  return (
    <div className="flex flex-col gap-0.5">
      <h2 className="font-semibold">{heading}</h2>
      <Divider opacity="low" />
      <div className="flex mx-auto lg:mx-0 gap-4 mt-1">{children}</div>
    </div>
  );
}

export default GroupHeading;
