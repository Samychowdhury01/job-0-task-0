"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
} from "@nextui-org/react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import Link from "next/link";
import Container from "./Container";

// Navigation items
const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#service" },
  { name: "Solution", href: "#solution" },
  { name: "FAQ", href: "#faq" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "#blog" },
];

export default function NavbarComponent() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Check if the current path matches the link
  const isActive = (href: string) => pathname === href;

  // Render navbar links
  const renderNavLinks = (isMobile = false) =>
    navItems.map((item) => (
      <NavbarItem key={item.name} isActive={isActive(item.href)}>
        <Link
          href={item.href}
          className={`text-sm font-medium ${isMobile ? "w-full" : ""} ${
            isActive(item.href) ? "border-b-1 border-primary" : ""
          }`}
          // scroll={false}
        >
          {item.name}
        </Link>
      </NavbarItem>
    ));

  return (
    <Container>
      <Navbar className="rounded-full nav-bg text-primary flex items-center justify-around" position="static">
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          {/* Logo */}
          <NavbarBrand className="hidden md:block">
            <Image src={logo} width={150} height={40} alt="fytobyte logo" />
          </NavbarBrand>
          {/* Mobile menu */}
          <NavbarBrand className="block md:hidden">
            <p className="text-primary font-semibold text-xl">FYTOBYTE</p>
          </NavbarBrand>
        </NavbarContent>

        {/* Desktop Links */}
        <NavbarContent className="hidden sm:flex gap-6" justify="center">
          {renderNavLinks()}
        </NavbarContent>

        {/* Right Side - Theme Toggle and Contact Button */}
        <NavbarContent justify="end" className="gap-3 items-center">
          <NavbarItem>
            <Button isIconOnly variant="light">
              moon
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Link href="/contact">
              <ButtonComponent radius="full" text="Talk with us" />
            </Link>
          </NavbarItem>
        </NavbarContent>

        {/* Mobile Menu */}
        <NavbarMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
          {renderNavLinks(true)}
        </NavbarMenu>
      </Navbar>
    </Container>
  );
}
