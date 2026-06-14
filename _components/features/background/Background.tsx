import Image, { StaticImageData } from "next/image";

type Props = {
  image: StaticImageData;
  alt: string;
};

function Background({ image, alt }: Props) {
  return (
    <div className="absolute inset-0 -z-10">
      <Image
        src={image}
        fill
        quality={100}
        priority
        alt={alt}
        placeholder="blur"
        sizes="100vw"
        className="object-cover object-top"
      />
    </div>
  );
}

export default Background;
