import React from "react";
import { Parallax } from "react-scroll-parallax";
import Hoverable from "./Hoverable";

function Languages() {
  return (
    <div
      id={"languages"}
      className={"relative py-32 w-full overflow-x-hidden min-h-screen"}
    >
      <main
        className={
          "mx-4 xl:mx-auto max-w-6xl w-full z-1 text-center space-y-12"
        }
      >
        <div className={"w-full max-w-6xl md:m-auto mx-4 text-xl"}>
          <code className={"html-tag"}>section name=&quot;languages&quot;</code>
        </div>

        <Hoverable data-aos="fade-up">
          <img
            src={"Languages/HTML.svg"}
            className={
              "mx-auto h-22 brightness-50 hover:brightness-100 transition"
            }
          />
        </Hoverable>
        <Hoverable data-aos="fade-up">
          <img
            src={"Languages/CSS.svg"}
            className={
              "mx-auto h-22 brightness-50 hover:brightness-100 transition"
            }
          />
        </Hoverable>
        <Hoverable data-aos="fade-up">
          <img
            src={"Languages/JavaScript.svg"}
            className={
              "mx-auto h-22 brightness-50 hover:brightness-100 transition"
            }
          />
        </Hoverable>
        <Hoverable data-aos="fade-up">
          <img
            src={"Languages/TypeScript.svg"}
            className={
              "mx-auto h-22 brightness-50 hover:brightness-100 transition"
            }
          />
        </Hoverable>
        <Hoverable data-aos="fade-up">
          <img
            src={"Languages/Java.svg"}
            className={
              "mx-auto h-22 brightness-50 hover:brightness-100 transition"
            }
          />
        </Hoverable>

        <div className={"w-full max-w-6xl md:m-auto mx-4 text-xl"}>
          <code className={"html-tag closing"}>section</code>
        </div>
      </main>

      <Parallax
        translateX={[-10, 0]}
        className={
          "absolute top-[20%] left-[10%] text-[16rem] font-krona -z-10 opacity-5"
        }
      >
        Languages
      </Parallax>
    </div>
  );
}

export default Languages;
