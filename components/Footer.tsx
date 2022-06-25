import React from "react";
import Hoverable from "./Hoverable";
import { GitHub, Language, LinkedIn, Twitter } from "iconoir-react";
import Languages from "./Languages";

function Footer() {
  return (
    <div
      id={"contact"}
      className={"bg-neutral-800 w-full py-24 footer md:footer-md"}
    >
      <main
        className={
          "mx-auto px-6 md:px-12 max-w-6xl flex flex-col items-center space-y-6 text-center"
        }
      >
        <Hoverable>
          <a className={"link"} href={"mailto:flo.rohrauer@gmail.com"}>
            <code className={"text-cyan-400"}>flo.rohrauer@gmail.com</code>
          </a>
        </Hoverable>

        <div className={"flex justify-center space-x-4"}>
          <Hoverable>
            <a
              href={"https://github.com/florianrohrauer"}
              target={"_blank"}
              rel={"noreferrer"}
            >
              <div
                className={
                  "hover:scale-110 transition grid place-items-center bg-neutral-700 w-16 h-16 rounded-full"
                }
              >
                <GitHub height={24} width={24} />
              </div>
            </a>
          </Hoverable>

          <Hoverable>
            <a
              href={"https://github.com/florianrohrauer"}
              target={"_blank"}
              rel={"noreferrer"}
            >
              <div
                className={
                  "hover:scale-110 transition grid place-items-center bg-neutral-700 w-16 h-16 rounded-full"
                }
              >
                <LinkedIn height={24} width={24} />
              </div>
            </a>
          </Hoverable>

          <Hoverable>
            <a href={"https://unchef.app"} target={"_blank"} rel={"noreferrer"}>
              <div
                className={
                  "hover:scale-110 transition grid place-items-center bg-neutral-700 w-16 h-16 rounded-full"
                }
              >
                <Language height={24} width={24} />
              </div>
            </a>
          </Hoverable>
        </div>

        <h5 className={"font-krona text-sm"}>
          Designed and Developed by Florian Rohrauer
        </h5>

        <code className={"opacity-50 text-sm"}>© 2022 Florian Rohrauer</code>
      </main>
    </div>
  );
}

export default Footer;
