import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // background: " #224192",
        foreground: "#224192",
        secondaryForeground: "#404040",
        primary: "#224192",
        secondary: "#171717 ",
        accent: "#F5F5F5"
      },
    },
  },
  plugins: [nextui()],
};
export default config;
