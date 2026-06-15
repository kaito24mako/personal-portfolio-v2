import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  text: string;
};

function TechCard({ src, alt, text }: Props) {
  return (
    <div className="p-3 rounded-sm bg-surface/80">
      <div className="flex items-center gap-3">
        <div className="p-1.5 rounded-md bg-border">
          <Image src={src} width={30} height={30} alt={alt} />
        </div>
        <span>{text}</span>
      </div>
    </div>
  );
}

export default TechCard;
