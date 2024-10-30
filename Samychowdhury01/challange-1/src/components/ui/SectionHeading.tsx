const SectionHeading = ({
  title,
  text,
  className,
}: {
  title: string;
  text: string;
  className: string;
}) => {
  return (
    <div className={`${className} mx-auto text-center mt-6 mb-10`}>
      <h2 className="gradient-sub-text text-3xl md:text-5xl font-bold mb-4">{title}</h2>
      <p className="text-[#737373]">{text}</p>
    </div>
  );
};

export default SectionHeading;
