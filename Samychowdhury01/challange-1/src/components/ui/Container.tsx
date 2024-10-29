type TContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: TContainerProps) => {
  return (
    <div className="w-full md:w-[1500px] md:mx-auto h-full">{children}</div>
  );
};

export default Container;
