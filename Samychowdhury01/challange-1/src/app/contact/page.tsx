/* eslint-disable react/no-unescaped-entities */
import Container from "@/components/ui/Container";
import { Button, Input, Textarea } from "@nextui-org/react";
import Image from "next/image";
import contact from "@/assets/contact.png";
const ContactPage = () => {
  return (
    <div className="relative top-28 pb-28">
      <Container>
        <div className="text-center">
          <h1 className="text-7xl mb-5">Contact Us</h1>
          <p className=" mb-10">
            Drop us a line to start your project or simply just say "Hello!"
          </p>
        </div>
        {/* body content */}
        <div className="flex items-center ">
          {/* text content */}
          <div className="flex-1">
            <h3 className="text-xl">We’re Ready!</h3>
            <h2 className="text-4xl mb-10 mt-1">Let’s Connect</h2>
            <p className="text-lg font-medium">Head-quarters:</p>
            <p>
              <span>Indonesia, Jakarta</span> <br />
              <span>Phone: (+62) 82260362579</span> <br />
              <span>Email: mfahlevi740@gmail.com</span>
            </p>
          </div>
          {/* input fields */}
          <div className="flex-1 space-y-5">
            <div className="flex gap-5 items-center">
              <Input type="text" label="Name" placeholder="Enter your name" />
              <Input
                type="email"
                label="Email"
                placeholder="Enter your email"
                className="w-full"
              />
            </div>
            <Textarea
              label="Description"
              placeholder="Enter your description"
              className="w-full"
            />
            <Button radius="none" className="w-full" color="secondary">
              Send Message
            </Button>
          </div>
        </div>
        {/* image container */}
        <div className="flex items-center gap-10 mt-16">
          <div className="flex-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.450003337163!2d91.78191797586712!3d22.336631141576472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd92547ac6995%3A0xdca6e0df3baa4d56!2sFYTOBYTE!5e0!3m2!1sen!2sbd!4v1730302907929!5m2!1sen!2sbd"
              loading="lazy"
              height={350}
              className="w-full rounded-3xl"
            ></iframe>
          </div>
          <div className="flex-1">
            <Image src={contact} alt="contact-image" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;
