import React from "react";
import Marquee from "./Marquee";
import classNames from "classnames";

function HomeBackground() {
  return (
    <div
      className={classNames(
        "absolute w-full top-0 h-screen select-none opacity-20 grid auto-cols-fr grid-cols-3",
        "sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 -z-10 overflow-hidden"
      )}
    >
      <Marquee
        space={200}
        size={367}
        imageSource={"Home Background Images/Web.svg"}
      />
      <Marquee
        size={1112}
        imageSource={"Home Background Images/Development.svg"}
      />
      <Marquee
        size={909}
        imageSource={"Home Background Images/Experience.svg"}
      />
      <Marquee
        size={373}
        space={150}
        imageSource={"Home Background Images/User.svg"}
      />
      <Marquee
        size={1053}
        space={120}
        imageSource={"Home Background Images/React Native.svg"}
      />
      <Marquee size={665} imageSource={"Home Background Images/React.js.svg"} />
      <Marquee size={648} imageSource={"Home Background Images/Angular.svg"} />

      <div
        className={
          "absolute bottom-0 h-40 w-full bg-gradient-to-b from-transparent to-background z-10"
        }
      />
    </div>
  );
}

export default HomeBackground;
