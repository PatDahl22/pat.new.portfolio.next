"use client";

import { navItems } from "@/data";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Experience from "@/components/Experience";
import { BackgroundLines } from "@/components/ui/background-lines";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { FooterSection } from "@/components/FooterSection";
import { BackgroundBeams } from "@/components/ui/background-beams";
import MagicButton from "@/components/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";


const Contact = () => {
  return (
    <>
      <div className="h-[40vh]">
        {" "}
        {/* Set height to 40vh on the container */}
        <div className="relative h-full w-full">
          <BackgroundLines
            className="absolute inset-0 -z-100"
            children={null}
          />{" "}
          {/* BackgroundLines fills the container */}
          <FloatingNav navItems={navItems} />
          <div className="relative h-full flex items-center justify-center w-full flex-col px-4">
            {/* Ensure content is positioned correctly */}
            <FloatingNav navItems={navItems} />
            <TextGenerateEffect
              words="All about Pat "
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
            />
            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              I'm a UX/UI designer and Frontend Developer based in Stockholm
              SWEDEN.
            </p>
            <div className="grid md:grid-cols-2 grid-rows-none sm:grid-cols-1 xs:grid-cols-1 gap-8 max-w-7xl mx-auto">
              <a href="https://drive.google.com/file/d/1-6qItxKaDT63F3om4ljZDnP2tde5ftLR/view">
                <MagicButton
                  title="Download My CV English"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </a>{" "}
              <a href="https://drive.google.com/file/d/1-7CDey7GBbTAZptw6_eH1JGhantRFgiA/view">
                <MagicButton
                  title="Download My CV Swedish"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-20">
        <div>
          <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-rows-none sm:grid-cols-1 xs:grid-cols-1 w-full h-full items-center justify-center gap-4">
            <div className="flex flex-col justify-center w-full px-4 sm:w-auto sm:px-4">
              <h4 className="relative text-black dark:text-white-200 my-2 flex flex-row text-xl font-semibold">
                Get to know Pat
              </h4>
              <h2 className="relative my-4 flex flex-row text-3xl font-bold">
                I am Pat Dahl
              </h2>
              <p className="text-sm leading-[1.6] my-2 text-black dark:text-white-200 font-normal">
                Originally from Thailand, I have a background in economics and
                began my career as a finance assistant, where I worked for five
                years after high school. Later, I ventured into
                entrepreneurship, running my own mobile operator company.
              </p>
              <p className="text-sm leading-[1.6] my-2 text-black dark:text-white-200 font-normal">
                After relocating to Sweden, I found employment in my field
                challenging, which led me to work as a nail technologist for 15
                years.
              </p>

              <p className="text-sm leading-[1.6] my-2 text-black dark:text-white-200 font-normal">
                However, my passion for technology and design remained strong.
                During the pandemic, with fewer customers, I took the
                opportunity to pursue this passion further by enrolling at Chas
                Academy.
              </p>
            </div>
            <div className="flex justify-center items-center sm:w-auto mt-6 sm:mt-0">
              <img
                src="/Pat.png"
                alt="travelbuddy mockup"
                className="w-full sm:w-auto sm:h-auto max-w-[400px] mx-auto"
              />
            </div>
          </div>
        </div>
 
        <Experience />
        <FooterSection />
        <Footer />
        <BackgroundBeams />
      </main>
    </>
  );
};

export default Contact;
