import React, { useEffect, useRef } from "react";
import { Parallax, useParallax } from "react-scroll-parallax";
import Projects from "./Projects";

function Portfolio() {
  return (
    <div className={"relative w-full overflow-x-hidden min-h-screen"}>
      <main className={"mx-4 xl:mx-auto max-w-6xl w-full z-1"}>
        <div className={"md:py-24 pb-12 text-xl font-bold space-y-6"}>
          <code className={"html-tag"}>h2</code>
          <h1 className={"text-3xl lg:text-6xl font-krona"}>My Portfolio</h1>
          <code className={"html-tag closing"}>h2</code>
        </div>
      </main>

      <div className={"text-xl space-y-6"}>
        <div className={"w-full max-w-6xl md:m-auto mx-4"}>
          <code className={"html-tag"}>section name=&quot;projects&quot;</code>
        </div>

        <div className={"flex space-x-4"}>
          <div className={"abc grid grid-rows-2 grid-cols-3 gap-4 w-full"}>
            <div className={"bg-white opacity-5"} />
            <Projects />
            <div className={"bg-white opacity-5"} />
            <div className={"bg-white opacity-5"} />
            <div className={"bg-white opacity-5"} />
          </div>
        </div>

        <div className={"w-full max-w-6xl md:m-auto mx-4"}>
          <code className={"html-tag closing"}>section</code>
        </div>
      </div>

      <Parallax
        translateX={[0, -10]}
        className={
          "absolute top-0 left-[20%] text-[6rem] lg:text-[16rem] font-krona -z-10 opacity-5"
        }
      >
        Portfolio
      </Parallax>
    </div>
  );
}

export default Portfolio;
