"use client";

import { ThemeProvider } from "@/context/ThemeContext";
import { NextUIProvider } from "@nextui-org/react";
import { ReactNode } from "react";

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <>
    <ThemeProvider>
    <NextUIProvider>{children}</NextUIProvider>
    </ThemeProvider>
    </>
  );
};

export default Provider;
