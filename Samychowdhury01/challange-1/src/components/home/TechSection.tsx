import React from "react";
import Container from "../ui/Container";
import SectionTag from "../ui/SectionTag";
import { FaCode } from "react-icons/fa";
import SectionHeading from "../ui/SectionHeading";
import { TiWeatherPartlySunny } from "react-icons/ti";
import TechSectionCard from "./TechSectionCard";
import Image from "next/image";
import image1 from "@/assets/card-image-1.png";
import image2 from "@/assets/card-image-2.png";
import { GrServices } from "react-icons/gr";

const TechSectionComponent = () => {
  return (
    <div id="service">
      <Container>
        {/* custom tag component */}
        <SectionTag title="Our Service">
          <GrServices />
        </SectionTag>
        {/* section heading */}
        <SectionHeading
          title=" Transform your tech business with tailored services"
          text="Websites / Applications / Web3 / Blockchain"
          className="md:w-1/3"
        />
        {/* card section*/}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* card */}
          <TechSectionCard
            title="Lorem Ipsum"
            subTitle="Create Fast And Simple"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet consectetur adipisicing elit. Sit, eos
              voluptatem quo laborum perferendis eligendi voluptas nam
              dignissimos hic dolorem inventore…"
            className="bg-accent dark:bg-transparent"
          >
            <TiWeatherPartlySunny size={50} />
          </TechSectionCard>
          <div className="md:col-span-2">
            <Image
              alt="card image"
              src={image1}
              className="object-cover w-full h-[300px] md:h-full border rounded-3xl"
            />
          </div>
          <div>
            <Image
              alt="card image"
              src={image2}
              className="object-cover w-full h-[250px] md:h-full rounded-3xl border"
            />
          </div>
          <TechSectionCard
            title="Lorem Ipsum"
            subTitle="Create Fast And Simple"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet consectetur adipisicing elit. Sit, eos
              voluptatem quo laborum perferendis eligendi voluptas nam
              dignissimos hic dolorem inventore…"
            className="bg-white dark:bg-transparent"
          >
            <FaCode size={50} />
          </TechSectionCard>
          <TechSectionCard
            title="Lorem Ipsum"
            subTitle="Create Fast And Simple"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet consectetur adipisicing elit. Sit, eos
              voluptatem quo laborum perferendis eligendi voluptas nam
              dignissimos hic dolorem inventore…"
            className="card-gradient"
          >
            <FaCode size={50} />
          </TechSectionCard>
        </div>
      </Container>
    </div>
  );
};

export default TechSectionComponent;
