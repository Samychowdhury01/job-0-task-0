import { IoNewspaperOutline } from "react-icons/io5";
import Container from "../ui/Container";
import SectionTag from "../ui/SectionTag";
import SectionHeading from "../ui/SectionHeading";
import ButtonComponent from "../ui/ButtonComponent";
import Image from "next/image";
import news from '@/assets/news.png'
const Blog = () => {
  return (
    <div id="blog">
      <Container>
        {/* custom tag component */}
        <SectionTag title="Tech News">
          <IoNewspaperOutline />
        </SectionTag>
        {/* section heading */}
        <SectionHeading
          title="Our Blog & News"
          text="We share essential insights from the technology sector, AI,and the world of software development."
          className="md:w-1/3"
        />
        <div className="bg-accent dark:bg-dark-bg flex flex-col-reverse md:flex-row rounded-3xl">
          {/* text container */}
          <div className="px-10 py-7 md:w-1/2">
            <h3 className="text- text-2xl font-bold">Unveiling the Art of Web Design: A Step-by-Step Guide</h3>
            <p className="text-secondaryForeground dark:text-dark-primary mt-7 mb-3">
              In the ever-evolving digital landscape, a visually appealing
              anduser-friendly website is crucial for success. Whether
              you&rsquo;re aseasoned designer or a novice looking to dip your
              toes into the world of web design, this step-by- step guide will
              help you create a stunning and effective…
            </p>
            <ButtonComponent radius="sm" text="Learn More" />
          </div>
          {/* image */}
          <div className="">
            <Image
            src={news}
            alt="news image"
            className="object-cover w-full h-full"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
