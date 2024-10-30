import React from "react";
import Container from "../ui/Container";
import SectionTag from "../ui/SectionTag";
import { FaCode, FaUmbrella } from "react-icons/fa";
import SectionHeading from "../ui/SectionHeading";
import { TiWeatherPartlySunny } from "react-icons/ti";
import TechSectionCard from "./TechSectionCard";
import Image from "next/image";
import image1 from '@/assets/card-image-1.png'
import image2 from '@/assets/card-image-2.png'

const TechSectionComponent = () => {
  return (
    <div>
      <Container>
        {/* custom tag component */}
        <SectionTag title="Our Solution">
          <FaUmbrella />
        </SectionTag>
        {/* section heading */}
        <SectionHeading
          title=" Transform your tech business with tailored services"
          text="Websites / Applications / Web3 / Blockchain"
        />
        {/* card section*/}
        <div className="grid grid-cols-3 gap-10">
          {/* card */}
          <TechSectionCard
            title="Lorem Ipsum"
            subTitle="Create Fast And Simple"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet consectetur adipisicing elit. Sit, eos
              voluptatem quo laborum perferendis eligendi voluptas nam
              dignissimos hic dolorem inventore…"
            className="bg-[#F5F5F5]"
          >
            <TiWeatherPartlySunny size={50} />
          </TechSectionCard>
          <div className="col-span-2">
            <Image
            alt="card image"
            src={image1}
            className="object-cover w-full h-full"
        />
          </div>
          <div>
            <Image
            alt="card image"
            src={image2}
            className="object-cover w-full h-full rounded-3xl"
        />
          </div>
          <TechSectionCard
            title="Lorem Ipsum"
            subTitle="Create Fast And Simple"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet consectetur adipisicing elit. Sit, eos
              voluptatem quo laborum perferendis eligendi voluptas nam
              dignissimos hic dolorem inventore…"
            className="bg-white"
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
