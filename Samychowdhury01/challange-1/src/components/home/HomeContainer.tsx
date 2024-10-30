import BannerComponent from "./Banner";
import SolutionComponent from "./SolutionComponent";
import TechSectionComponent from "./TechSection";

const HomeContainer = () => {
  return (
    <div>
      <BannerComponent />
      <TechSectionComponent />
      <SolutionComponent/>
    </div>
  );
};

export default HomeContainer;
