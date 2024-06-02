import React from "react";
import Hoverable from "./Hoverable";
import {Github, Language, Linkedin} from "iconoir-react";
import {IconButton} from "./IconButton";

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
            <code className={"text-rose-400"}>flo.rohrauer@gmail.com</code>
          </a>
        </Hoverable>

        <div className={"flex justify-center space-x-4"}>
          <IconButton link={"https://github.com/florianrohrauer"}>
            <Github height={24} width={24} />
          </IconButton>

          <IconButton link={"https://www.linkedin.com/in/florian-rohrauer-913726243"}>
            <Linkedin height={24} width={24} />
          </IconButton>

          <IconButton link={"https://www.unchef.app"}>
            <Language height={24} width={24} />
          </IconButton>
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
