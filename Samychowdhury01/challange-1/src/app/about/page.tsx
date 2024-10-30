import img1 from "@/assets/about-desk.png";
import img2 from "@/assets/about-study.png";
import AboutCard from "@/components/about/AboutCard";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { GoGoal } from "react-icons/go";
import { TbDeviceVisionPro } from "react-icons/tb";

const AboutPage = () => {
  return (
    <div className="relative top-28 pb-28">
      <Container>
        <div className="text-center">
          <h1 className="text-7xl mb-5">About Us</h1>
          <p className="w-1/3 mx-auto mb-10">
            Watch your operations optimize as our apps streamline workflows and
            drives efficiency for your success.
          </p>
        </div>
        {/* body content */}
        <div className="flex gap-10">
            {/* mission */}
          <div>
            <Image src={img1} alt="desk image of about page" />
            <div className="mt-36 w-[804px]">
              <AboutCard
                title="Mission"
                text="At FYTOBYTE LIMITED, our mission is to revolutionize the business landscape by delivering innovative SaaS solutions that empower growth and efficiency. We strive to create seamless, user-centric software that simplifies complex processes, enabling businesses to thrive in a rapidly evolving digital world. With a commitment to excellence and technological advancement, we aim to be the driving force behind our clients success and transformation."
              >
                <GoGoal size={50} />
              </AboutCard>
            </div>
          </div>
          {/* vision */}
          <div>
            <div className="mb-10 mt-5 w-[469px]">
              <AboutCard
                title="Vision"
                text="FYTOBYTE LIMITED envisions a future where businesses harness the power of technology effortlessly. We aim to be the vanguard in creating adaptable, user-centric SaaS solutions that propel enterprises towards success. We envision a digital landscape where our innovative tools and services revolutionize operations, enabling organizations to flourish and stay ahead in an ever-evolving, competitive market, setting new benchmarks for excellence."
              >
                <TbDeviceVisionPro size={50} />
              </AboutCard>
            </div>
            <Image src={img2} alt="desk image of about page" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutPage;
