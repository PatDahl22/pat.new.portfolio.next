"use client";

import { navItems } from "@/data";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { BackgroundLines } from "@/components/ui/background-lines";
import { TypewriterEffectSmooth as TypewriterEffect } from "@/components/ui/typewriter-effect";
import Clients from "@/components/Clients";
import { SignupForm } from "@/components/SignupForm";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

const words = [
  {
    text: " Are ",
    className: "text-6xl font-bold",
  },
  {
    text: " you ",
    className: "text-6xl font-bold",
  },
  {
    text: " ready?",
    className: "text-6xl font-bold",
  },
];

const Contact = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden w-full h-full px-20">
      <ShootingStars />
      <StarsBackground />

      <div className="h-[60vh]">
        <div className="relative h-full w-full">
          <BackgroundLines
            className="absolute inset-0 -z-100"
            children={undefined}
          />
          <FloatingNav navItems={navItems} />
          <div className="relative h-full flex items-center justify-center w-full flex-col px-4">
            <TypewriterEffect words={words} />
            <div className="flex flex-col items-center">
              <p className="text-center my-10">
                I'm ready to
                <span className="text-purple "> craft a solution</span>
                <br /> that drives results for your business.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <FloatingNav navItems={navItems} />
        <SignupForm />
        <Clients />
        <Footer />
      </div>
    </main>
  );
};

export default Contact;
