import React, { useState } from "react";
import { Menu } from "iconoir-react";
import FadeTransition from "./FadeTransition";
import classNames from "classnames";
import Hoverable from "./Hoverable";

function NavBar() {
  const [open, setOpen] = useState<boolean>(false);

  const navigate = (to: string) => {
    return () => {
      setOpen(false);
      window.location.href = to;
    };
  };

  return (
    <div className={"w-screen fixed z-10"}>
      <div
        className={classNames(
          "w-full max-w-6xl md:h-32 m-auto flex px-6 md:px-12 h-16 justify-between",
          "items-center bg-gradient-to-b from-background to-transparent",
          { "bg-background": open }
        )}
      >
        <a
          href={"#home"}
          className={"cursor-none logo font-[800] text-3xl tracking-widest"}
        >
          <Hoverable>
            <code>
              _FR
              <span
                id={"logo-arrow"}
                className={"inline-block transition ease-in-out duration-200"}
              >
                &gt;
              </span>
            </code>
          </Hoverable>
        </a>

        <div className={"space-x-6 hidden md:flex"}>
          <Hoverable>
            <code className={"font-bold text-lg transition hover:scale-110"}>
              <a href={"#home"} className={"html-tag closing"}>
                Home
              </a>
            </code>
          </Hoverable>
          <Hoverable>
            <code className={"font-bold text-lg transition hover:scale-110"}>
              <a href={"#portfolio"} className={"html-tag closing"}>
                Portfolio
              </a>
            </code>
          </Hoverable>
          <Hoverable>
            <code className={"font-bold text-lg transition hover:scale-110"}>
              <a href={"#languages"} className={"html-tag closing"}>
                Languages
              </a>
            </code>
          </Hoverable>
          <Hoverable>
            <code className={"font-bold text-lg transition hover:scale-110"}>
              <a href={"#contact"} className={"html-tag closing"}>
                Contact
              </a>
            </code>
          </Hoverable>
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
            <a className={"html-tag closing"} onClick={navigate("#home")}>
              Home
            </a>
          </code>
          <code className={"font-bold text-3xl"}>
            <a className={"html-tag closing"} onClick={navigate("#portfolio")}>
              Portfolio
            </a>
          </code>
          <code className={"font-bold text-3xl"}>
            <a className={"html-tag closing"} onClick={navigate("#languages")}>
              Languages
            </a>
          </code>
          <code className={"font-bold text-3xl"}>
            <a className={"html-tag closing"} onClick={navigate("#contact")}>
              Contact
            </a>
          </code>
        </div>
      </FadeTransition>
    </div>
  );
}

export default NavBar;
