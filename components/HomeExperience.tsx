import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const HomeExperience = () => {
  return (
    <div className="py-10 w-full mx-auto">
      <h1 className="heading">
        My <span className="text-purple"> experience</span>
      </h1>

      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 w-full h-auto items-center justify-center gap-6 my-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              //   add these two
              //   you can generate the color from here https://cssgradient.io/
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              // add this border radius to make it more rounded so that the moving border is more realistic
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            // remove bg-white dark:bg-slate-900
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col-reverse items-center justify-center p-8">
              <div>
                <img
                  src={card.thumbnail}
                  alt={card.thumbnail}
                  className="lg:w-20 md:w-20 w-16 py-4"
                />

                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold line-clamp-2">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default HomeExperience;