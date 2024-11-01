'use client'
import { TodoProvider } from "@/Context/TodoContext";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

const Provider = ({ children }: ThemeProviderProps) => {
    return (
        <TodoProvider>
            <NextThemesProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem={true} 
                disableTransitionOnChange
            >
                {children}
            </NextThemesProvider>
        </TodoProvider>
    );
};

export default Provider;
