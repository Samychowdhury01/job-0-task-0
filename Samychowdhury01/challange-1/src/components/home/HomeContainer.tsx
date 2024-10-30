import BannerComponent from "./Banner";
import Blog from "./Blog";
import FaqComponent from "./FaqComponent";
import SolutionComponent from "./SolutionComponent";
import TechSectionComponent from "./TechSection";

const HomeContainer = () => {
  return (
    <div>
      <BannerComponent />
      <TechSectionComponent />
      <SolutionComponent/>
      <FaqComponent/>
      <Blog/>
    </div>
  );
};

export default HomeContainer;
