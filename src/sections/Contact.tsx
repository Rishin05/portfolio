import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
    return (
        <div id="contact" className="py-16 pt-12 lg:py-28 lg:pt-20">
            <div className="container">
                <div className="bg-gradient-to-r from-gradient-s to-gradient-e text-gray-950 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-5">
                    <div
                        className="absolute inset-0 opacity-5 -z-10"
                        style={{ backgroundImage: `url(${grainImage.src})` }}
                    ></div>
                    <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
                        <div>
                            <h2 className="font-serif text-2xl md:text-3xl">
                                Let's create something amazing together
                            </h2>
                            <p className="text-sm md:text-base mt-2">
                                Collaboration is where creativity meets purpose.
                                Let's combine our skills, ideas, and passion to
                                build something truly remarkable.
                            </p>
                        </div>
                        <div>
                            <a href="mailto:rishinp26@gmail.com" className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-white z-5">
                                <span className="font-semibold">Contact Me</span>
                                <ArrowUpRightIcon className="size-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
