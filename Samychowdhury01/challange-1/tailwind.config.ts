import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#224192",
        foreground: "#224192",
        secondaryForeground: "#404040",
        primary: "#224192",
        "dark-primary": "#D4D4D4",
        "dark-bg": "#0A0A0A",
        secondary: "#171717",
        accent: "#F5F5F5",
        "dark-accent": " #1a1a1a",
      },
    },
  },
  plugins: [nextui()],
};

export default config;
