import Link from "next/link";
import Container from "./Container";
import footerLogo from "@/assets/footer-logo.png";
import Image from "next/image";
import { FaDiscord, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="grid grid-cols-4 mb-10">
          <div className="space-y-5">
            <h3 className="text-2xl font-bold text-secondary">Explore</h3>
            <ul className="text-secondaryForeground space-y-5">
              <li>
                <Link href="/about">About FYTOBYTE LIMITED</Link>
              </li>
              <li>Our Solution</li>
              <li>Our Blog</li>
            </ul>
          </div>
          <div className="space-y-5">
            <h3 className="text-2xl font-bold text-secondary">Expertise</h3>
            <ul className="text-secondaryForeground space-y-5">
              <li>Cloud integration Solutions</li>
              <li>Custom Web Development</li>
              <li>Data Analytics and insights</li>
            </ul>
          </div>
          <div className="space-y-5">
            <h3 className="text-2xl font-bold text-secondary">Services</h3>
            <ul className="text-secondaryForeground space-y-5">
              <li>Cybersecurity & Compliance</li>
              <li>AI-Powered Automation</li>
              <li>User Experience Design</li>
            </ul>
          </div>
          <div className="space-y-5">
            <h3 className="text-2xl font-bold text-secondary">Info</h3>
            <ul className="text-secondaryForeground space-y-5">
              <li>FAQ</li>
              <li>Documentation</li>
              <li>Get in touch</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div>
            <Image src={footerLogo} alt="FYTOBYTE LIMITED" />
            <div className="flex items-center gap-5 mt-5 mb-8">
            <FaMedium size={30}/>
              <FaTwitter size={30}/>
              <FaLinkedin size={30}/>
              <FaDiscord size={30}/>
            </div>
            <p className="text-secondaryForeground">
              &copy; 2024 Fytobyte. All Rights Reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
