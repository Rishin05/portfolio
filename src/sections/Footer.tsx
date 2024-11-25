import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import logo from "@/assets/images/logo-rishin.png";

const footerLinks = [
    {
        title: "Github",
        href: "https://github.com/Rishin05",
    },
    {
        title: "LinkedIn",
        href: "https://www.linkedin.com/in/patelrishin/",
    },
];

export const Footer = () => {
    return (
        <footer className="relative -z-5 overflow-x-clip">
            <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-gradient-s/70 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-20"></div>
            <div className="container">
                <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row  md:justify-between items-center gap-8">
                    <div className="text-white/70 inline-flex  items-center ">
                        <Image src={logo} alt="Logo" className="size-8" />
                        <span>&copy; 2024 rishinp26@gmail.com </span>
                    </div>
                    <nav className="flex flex-col items-center gap-8 md:flex-row">
                        {footerLinks.map((link) => (
                            <a
                                href={link.href}
                                key={link.title}
                                className="inline-flex items-center gap-1.5"
                            >
                                <span className="font-semibold">
                                    {link.title}
                                </span>
                                <ArrowUpRightIcon className="size-4" />
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </footer>
    );
};
