type TContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: TContainerProps) => {
  return (
    <div className="w-full md:max-w-7xl md:mx-auto h-full">{children}</div>
  );
};

export default Container;
