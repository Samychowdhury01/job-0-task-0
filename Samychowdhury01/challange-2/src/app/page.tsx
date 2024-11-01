import DataWrapper from "@/components/DataWrapper";
import { ToggleTheme } from "@/components/ToggleTheme";

const HomePage = async () => {
  return (
    <div className="container md:max-w-6xl mx-auto px-5 py-10">
      <div className="flex items-center justify-center gap-32 mb-10">
      <h1 className="text-5xl font-bold text-center gradient-text">
        Task Table
      </h1>
        <ToggleTheme />
      </div>
      <div>
        <DataWrapper />
      </div>
    </div>
  );
};

export default HomePage;
