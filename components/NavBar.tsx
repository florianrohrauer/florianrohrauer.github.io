import React, { useState } from "react";
import { Menu } from "iconoir-react";
import FadeTransition from "./FadeTransition";
import classNames from "classnames";

function NavBar() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className={"w-screen absolute z-10"}>
      <div
        className={classNames(
          "w-full max-w-6xl md:h-32 xl:px-0 m-auto flex px-4 h-16 justify-between",
          "items-center bg-gradient-to-b from-background to-transparent",
          { "bg-background": open }
        )}
      >
        <a
          href={"/"}
          className={"logo font-[800] text-3xl tracking-widest cursor-pointer"}
        >
          <code>
            _FR
            <span
              id={"logo-arrow"}
              className={"inline-block transition ease-in-out duration-200"}
            >
              &gt;
            </span>
          </code>
        </a>

        <div className={"space-x-6 hidden md:flex"}>
          <code className={"font-bold text-lg"}>
            <a className={"html-tag closing"}>Home</a>
          </code>
          <code className={"font-bold text-lg"}>
            <a className={"html-tag closing"}>Portfolio</a>
          </code>
          <code className={"font-bold text-lg"}>
            <a className={"html-tag closing"}>AboutMe</a>
          </code>
          <code className={"font-bold text-lg"}>
            <a className={"html-tag closing"}>Contact</a>
          </code>
        </div>

        <div onClick={() => setOpen(!open)} className={"md:hidden"}>
          <Menu height={32} width={32} color={"#fff"} />
        </div>
      </div>

      <FadeTransition show={open}>
        <div
          className={classNames(
            "bg-background dropdown-nav md:hidden py-12 w-full",
            "flex flex-col items-center space-y-8 absolute top-16"
          )}
        >
          <code className={"font-bold text-3xl"}>
            <a className={"html-tag closing"}>Home</a>
          </code>
          <code className={"font-bold text-3xl"}>
            <a className={"html-tag closing"}>Portfolio</a>
          </code>
          <code className={"font-bold text-3xl"}>
            <a className={"html-tag closing"}>AboutMe</a>
          </code>
          <code className={"font-bold text-3xl"}>
            <a className={"html-tag closing"}>Contact</a>
          </code>
        </div>
      </FadeTransition>
    </div>
  );
}

export default NavBar;
