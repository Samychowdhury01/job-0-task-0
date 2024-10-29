import React from "react";
import NavbarComponent from "../ui/Navbar";
import Container from "../ui/Container";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import ball from "@/assets/ball.png";
const BannerComponent = () => {
  return (
    <div className="relative">
      <div className="banner-bg h-screen relative">
        <Container>
          <div className="md:pt-5">
            <NavbarComponent />
          </div>
          <div className="w-2/3 mx-auto flex items-center justify-center h-[70%]">
            <div className="text-center">
              {/* banner heading */}
              <h1 className="text-6xl font-semibold mb-5">
                Transform your workflow with cutting-edge solutions from
                FYTOBYTE LIMITED.
              </h1>
              {/* banner paragraph */}
              <p className="w-1/2 mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid sapiente suscipit amet optio quia fuga rerum ex
                cupiditate maiores, perferendis blanditiis, quam a.
              </p>
              {/* action button */}
              <div className="flex items-center justify-center gap-5 mt-10 relative z-50">
                <Button radius="md" className="bg-secondary text-white">
                  Get Started
                </Button>
                <Button radius="md" className="bg-secondary text-white">
                  Join Us
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* ball image */}
      <div className="absolute -bottom-[36%] left-1/2 transform -translate-x-1/2 z-10">
        <Image src={ball} alt="banner-ball-image" width={765} height={766} />
      </div>
    </div>
  );
};

export default BannerComponent;
