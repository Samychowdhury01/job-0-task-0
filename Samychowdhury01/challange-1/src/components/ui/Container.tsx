type TContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: TContainerProps) => {
  return (
    <div className="w-full md:max-w-7xl md:mx-auto h-full px-2 md:p-0">{children}</div>
  );
};

export default Container;
