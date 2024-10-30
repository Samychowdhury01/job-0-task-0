import React from "react";
import NavbarComponent from "../ui/Navbar";
import Container from "../ui/Container";
import Image from "next/image";
import ball from "@/assets/ball.png";
import ButtonComponent from "../ui/ButtonComponent";
const BannerComponent = () => {
  return (
    <div className="relative mb-[210px]">
      <div className="banner-bg h-screen md:h-[1078px] relative">
        <Container>
          <div className="md:pt-5">
            <NavbarComponent />
          </div>
          <div className="w-2/3 mx-auto flex items-center justify-center h-[70%]">
            <div className="text-center">
              {/* banner heading */}
              <h1 className="text-6xl gradient-text font-semibold mb-5">
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
                <ButtonComponent text="Get Started" radius="md" />
                <ButtonComponent text="Join Us" radius="md" />
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* ball image */}
      <div className="absolute -bottom-[21%] left-1/2 transform -translate-x-1/2 z-10">
        <Image src={ball} alt="banner-ball-image" width={765} height={766} />
      </div>
    </div>
  );
};

export default BannerComponent;
