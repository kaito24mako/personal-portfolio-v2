import Image from "next/image";

function TechCard({ src, alt, text }) {
  return (
    <div className="p-3 rounded-sm bg-surface/40 ">
      <div className="flex items-center gap-3">
        <div className="p-1.5 rounded-md bg-surface">
          <Image src={src} width={30} height={30} alt={alt} />
        </div>
        <span>{text}</span>
      </div>
    </div>
  );
}

export default TechCard;
