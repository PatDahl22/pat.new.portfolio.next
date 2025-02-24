import { FaLocationArrow } from "react-icons/fa";

import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./MagicButton";

const Hero = () => {
  return (
    <div className="pb-10 pt-36">        
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"
        />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[50vh] w-[50vw]" fill="blue" />
      </div>
        
{/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
        <div className="h-[50vh] w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.03] absolute top-0 left-0 flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div
          // change the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-black-100 "
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                
        {/**
         *  Link: https://ui.aceternity.com/components/text-generate-effect
         *
         *  change md:text-6xl, add more responsive code
         */}
          <TextGenerateEffect
            words="Welcome to "
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
          <TextGenerateEffect
            words="Pat Dahl's Portfolio"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            I&apos;m a UX/UI designer and Frontend Developer based in Stockholm SWEDEN.
          </p>

          <a href="/contact">
            <MagicButton
              title="Let's talk"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;