import React, { Fragment } from "react";
import HomeBackground from "./HomeBackground";
import Stagger from "./Stagger";
import Hoverable from "./Hoverable";

function Home() {
  return (
    <div id={"home"}>
      <div className={"relative max-w-6xl w-full m-auto min-h-screen z-11"}>
        <main className={"py-24 md:py-44 space-y-8 px-6 md:px-12"}>
          <Stagger>
            <code className={"text-xl font-bold"}>
              <span className={"html-tag"}>h1</span>
              <span>Hi I am</span>
              <span className={"html-tag closing"}>h1</span>
            </code>

            <div className={"space-y-12"}>
              <img
                src={"Home Foreground Images/Florian.svg"}
                className={"h-22 max-w-[80%]"}
                alt={"Florian"}
              />
              <img
                src={"Home Foreground Images/Web-Developer.svg"}
                className={"h-22"}
                alt={"Web Developer"}
              />
            </div>

            <code className={"text-xl font-bold"}>
              <span className={"html-tag"}>body</span>
              <p>Frontend Developer / App Developer</p>
              <span className={"html-tag closing"}>body</span>
            </code>
          </Stagger>
        </main>

        <div
          className={
            "w-full max-w-6xl m-auto flex justify-between opacity-60 px-6 md:px-12"
          }
        >
          <Hoverable className={"absolute right-12"}>
            <code className={"link email invisible lg:visible"}>
              <a href={"mailto:flo.rohrauer@gmail.com"}>
                flo.rohrauer@gmail.com
              </a>
            </code>
          </Hoverable>

          <Hoverable
            className={
              "absolute left-1/2 -translate-x-1/2 translate-y-6 hover:scale-110 transition"
            }
          >
            <a href={"#portfolio"}>
              <code className={"scroll-down flex items-center h-20"}>
                Scroll Down
              </code>
            </a>
          </Hoverable>

          <div
            className={
              "bg-white w-0.5 h-60 rounded bg-gradient-to-t from-background to-transparent invisible lg:visible"
            }
          />
          <div
            className={
              "bg-white w-0.5 h-60 rounded bg-gradient-to-t from-background to-transparent"
            }
          />
          <div
            className={
              "bg-white w-0.5 h-60 rounded bg-gradient-to-t from-background to-transparent invisible lg:visible"
            }
          />
        </div>
      </div>

      <HomeBackground />
    </div>
  );
}

export default Home;
