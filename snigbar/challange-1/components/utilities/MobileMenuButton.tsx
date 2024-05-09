"use client";
import { useTheme } from "next-themes";
import React from "react";

const MobileMenuButton = () => {
  const { resolvedTheme } = useTheme();
  return (
    <button>
      <svg
        viewBox="0 0 49 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block md:hidden h-8 w-8"
      >
        <path
          d="M41.48 15.5H20.48C17.18 15.5 14.48 12.8 14.48 9.5C14.48 5.75 17.18 3.5 20.48 3.5C23.78 3.5 26.48 6.2 26.48 9.5V39.5C26.48 42.8 29.18 45.5 32.48 45.5C35.78 45.5 38.48 42.8 38.48 39.5C38.48 36.2 35.78 33.5 32.48 33.5H11.48"
          stroke={resolvedTheme === "dark" ? "white" : "black"}
          strokeWidth={4.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="18 94.5"
        />
        <path
          d="M11.48 24.5H41.48"
          stroke={resolvedTheme === "dark" ? "white" : "black"}
          strokeWidth={4.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default MobileMenuButton;
