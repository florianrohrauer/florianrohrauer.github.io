import React, { Fragment } from "react";
import HomeBackground from "./HomeBackground";
import Stagger from "./Stagger";

function Home() {
  return (
    <Fragment>
      <div className={"relative max-w-6xl w-full m-auto min-h-screen z-11"}>
        <main className={"py-24 md:py-44 space-y-8 mx-4 xl:mx-0"}>
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
                className={"h-22 max-w-[90%]"}
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
            "w-full max-w-6xl m-auto flex justify-between opacity-60 px-4"
          }
        >
          <code
            className={
              "link cursor-pointer absolute right-4 email invisible lg:visible"
            }
          >
            flo.rohrauer@gmail.com
          </code>

          <code
            className={
              "scroll-down flex items-center absolute left-1/2 -translate-x-1/2 translate-y-6 h-20"
            }
          >
            Scroll Down
          </code>

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
    </Fragment>
  );
}

export default Home;
