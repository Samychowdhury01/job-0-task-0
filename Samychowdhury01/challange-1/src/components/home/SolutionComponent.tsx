import { FaUmbrella } from "react-icons/fa";
import Container from "../ui/Container";
import SectionTag from "../ui/SectionTag";
import SectionHeading from "../ui/SectionHeading";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import img from "@/assets/card-image-1.png";
import img2 from "@/assets/card-image-2.png";
import img3 from "@/assets/card-image-3.png";
import img4 from "@/assets/card-image-4.png";

const SolutionComponent = () => {
  const data = [
    {
      title: "fytobyte Limited",
      subTitle: "Solutions",
      text: "A comprehensive business service app offering efficient solutions for seamless operations and growth.",
      img: img,
    },
    {
      title: "fytobyte Limited",
      subTitle: "Solutions",
      text: "A comprehensive business service app offering efficient solutions for seamless operations and growth.",
      img: img2,
    },
    {
      title: "fytobyte Limited",
      subTitle: "Solutions",
      text: "A comprehensive business service app offering efficient solutions for seamless operations and growth.",
      img: img3,
    },
    {
      title: "fytobyte Limited",
      subTitle: "Solutions",
      text: "A comprehensive business service app offering efficient solutions for seamless operations and growth.",
      img: img4,
    },
  ];
  return (
    <div className="my-28">
      <Container>
        <SectionTag title="Our Solution">
          <FaUmbrella />
        </SectionTag>
        {/* section heading */}
        <SectionHeading
          title="Streamlining operations,
                unleashing seamless digital
                solutions"
          text="Innovative solutions for seamless digital transformation."
          className="w-1/2"
        />
        <div className="grid grid-cols-2 gap-10">
          {data.map((item, index) => (
            <Card key={index} shadow="sm">
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="none"
                  width="100%"
                  alt="car-image"
                  className="w-full object-cover h-52"
                  src={item.img.src}
                />
              </CardBody>
              <CardFooter
                className="text-small flex-col items-start -5 bg-[#F5F5F5] border-1 border-[#F5F5F5]"
              >
                <h3 className="text-secondary capitalize text-xl font-bold w-1/ block">
                  {item.title}
                </h3>
                <p className="text-sm text-secondaryForeground">{item.text}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default SolutionComponent;
