import React from "react";
import {Parallax} from "react-scroll-parallax";
import Projects from "./Projects";

function Portfolio() {
  return (
    <div
      id={"portfolio"}
      className={"relative w-full overflow-x-hidden min-h-screen"}
    >
      <main className={"max-w-6xl mx-auto w-full z-1 px-6 md:px-12"}>
        <div className={"md:pt-24 pb-12 text-xl font-bold space-y-6"}>
          <code className={"html-tag"}>h2</code>
          <h1 className={"text-6xl font-krona"}>My Portfolio</h1>
          <code className={"html-tag closing"}>h2</code>
        </div>
      </main>

      <div className={"text-xl space-y-6 pt-24"} id={"projects"}>
        <div className={"w-full max-w-6xl md:m-auto px-6 md:px-12"}>
          <code className={"html-tag"}>section name=&quot;projects&quot;</code>
        </div>

        <div className={"flex space-x-4"}>
          <div
            className={
              "grid-template md:grid-template-md grid grid-rows-2 gap-4 w-full"
            }
          >
            <div className={"bg-white opacity-5"} />
            <Projects />
            <div className={"bg-white opacity-5"} />
            <div className={"bg-white opacity-5"} />
            <div className={"bg-white opacity-5"} />
          </div>
        </div>

        <div className={"w-full max-w-6xl md:m-auto px-6 md:px-12"}>
          <code className={"html-tag closing"}>section</code>
        </div>
      </div>

      <Parallax
        translateX={[0, -10]}
        className={
          "absolute top-0 left-[20%] text-[16rem] font-krona -z-10 opacity-5"
        }
      >
        Portfolio
      </Parallax>
    </div>
  );
}

export default Portfolio;
