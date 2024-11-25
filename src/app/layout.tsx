import type { Metadata } from "next";
import "./globals.css";
import '../../public/fonts/Archivo/Fonts/WEB/css/archivo.css'
import '../../public/fonts/ClashDisplay/Fonts/WEB/css/clash-display.css'
import { twMerge } from "tailwind-merge";




export const metadata: Metadata = {
    title: "Rishin Patel",
    description: "Portfolio showcasing skills, projects, and interactive design",
    icons: {
        icon: "/logo-colored.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={twMerge("font-sans", "font-serif","antialiased bg-custom-dark text-white font-sans")}
            >
                {children}
            </body>
        </html>
    );
}
