const SectionHeading = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className="w-1/3 mx-auto text-center mt-6 mb-10">
      <h2 className="gradient-sub-text text-5xl font-bold mb-4">{title}</h2>
      <p className="text-[#737373]">{text}</p>
    </div>
  );
};

export default SectionHeading;
