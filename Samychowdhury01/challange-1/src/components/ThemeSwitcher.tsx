"use client";

import { useTheme } from "@/context/ThemeContext";
import { IoSunnyOutline } from "react-icons/io5";
import { LuMoon } from "react-icons/lu";

export default function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={` p-1   rounded-full ${
        isDarkMode ? "bg-secondary" : "bg-gray-300"
      }`}
    >
      {isDarkMode ? <IoSunnyOutline size={20} /> : <LuMoon size={20} />}
    </button>
  );
}
