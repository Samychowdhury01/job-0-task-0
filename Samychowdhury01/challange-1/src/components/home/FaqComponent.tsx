import { SiKnowledgebase } from "react-icons/si";
import Container from "../ui/Container";
import SectionTag from "../ui/SectionTag";
import SectionHeading from "../ui/SectionHeading";
import Image from "next/image";
import faq from "@/assets/faq.png";
import { FaPiedPiper } from "react-icons/fa";
import ButtonComponent from "../ui/ButtonComponent";
const FaqComponent = () => {
  return (
    <div className="mb-28" id="faq">
      <Container>
        <SectionTag title="Knowledge Base">
          <SiKnowledgebase />
        </SectionTag>
        <SectionHeading
          title="FAQ & Documentation"
          text="FYTOBYTE LIMITED provides customers complete entry to
knowledge base API and documentation."
          className=""
        />
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1 md:w-[645px] md:h-[400px]">
            <Image
              src={faq}
              alt="FAQ section image"
              className="object-contain md:object-cover w-full h-full  rounded-3xl dark:border-gray-500"
            />
          </div>
          {/* text */}
          <div className="flex-1 bg-accent dark:bg-dark-bg px-10 py-5 rounded-3xl border dark:border-gray-500">
            <div className="space-y-3">
              <FaPiedPiper size={50} />
              {/* card heading */}
              <h1 className="text-secondary dark:text-white text-2xl font-bold">
                Full API Access
              </h1>
              {/* sub-heading */}
            </div>
            {/* text */}
            <p className="text-secondaryForeground dark:text-dark-primary my-5 ">
              Sign up and access our intuitive platform. Upload your data
              effortlessly, then customize preferences. Our robust tools analyze
              and generate insights promptly. Collaborate seamlessly with team
              members using integrated communication features. Watch your
              operations optimize as our app streamlines workflows and drives
              efficiency for your success.
            </p>
            <ButtonComponent radius="md" text="Learn More"/>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FaqComponent;
