function MarqueeX() {
  return (
    <div className="absolute bottom-0 overflow-hidden w-full py-20">
      {/* marquee track */}
      <div className="flex w-max animate-marquee">
        {/* original content block */}
        <div className="flex justify-around gap-40 pr-40 text-8xl font-heading text-background italic">
          <span>Thank you for visiting</span>
          {/* <span className="text-background">
              ポートフォリオをご覧いただき、ありがとうございます。
            </span> */}
        </div>
        {/* duplicate content block */}
        <div
          aria-hidden="true"
          className="flex justify-around gap-40 pr-40 text-8xl font-heading text-background italic"
        >
          <span>Thank you for visiting</span>
          {/* <span className="text-background">
              ポートフォリオをご覧いただき、ありがとうございます。
            </span> */}
        </div>
      </div>
    </div>
  );
}

export default MarqueeX;
