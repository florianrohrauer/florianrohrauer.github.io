import React, {useEffect, useMemo, useState} from "react";
import classNames from "classnames";
import Hoverable from "./Hoverable";
import {Github, Language, Npm} from "iconoir-react";
import {IconButton} from "./IconButton";

const DIASHOW_DURATION = 25 * 1000; // Seconds
const PROJECTS = require("/public/Projects.json");

function Projects() {
  const [index, setIndex] = useState(0);
  const project = useMemo(() => PROJECTS[index], [index]);
  const [paused, setPaused] = useState(false)

  const onClick = (index: number) => {
    if (window.innerWidth <= 1024) {
      window.location.href = "#projects";
    }

    setIndex(index);
  };

  useEffect(() => {
    if(!paused) {
      const interval = setInterval(() => {
        if (index + 1 >= PROJECTS.length) {
          setIndex(0);
        } else setIndex(index + 1);
      }, DIASHOW_DURATION);

      return () => {
        clearInterval(interval);
      };
    }
  }, [index, paused]);

  return (
    <div
      className={
        "anchor grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 row-span-2"
      }
    >
      <Hoverable
        onClick={() => onClick(0)}
        className={classNames(
          "hover project-item h-52 flex justify-center items-center bg-white",
          { "opacity-100": project.name == "My Zone" }
        )}
      >
        <img src={"Projects/MyZone Logo.png"} className={"h-24"} />
      </Hoverable>

      <Hoverable
        onClick={() => onClick(1)}
        className={classNames(
          "project-item h-52 flex justify-center items-center bg-indigo-600 lg:col-span-2",
          { "opacity-100": project.name == "Velo" }
        )}
      >
        <img src={"Projects/Velo Logo.png"} className={"h-28"} />
      </Hoverable>
      <div
        className={classNames(
          "bg-[#2a2a2a] p-6 space-y-6 row-start-1 md:row-span-5 md:row-start-1",
          "md:col-start-2 lg:col-start-4 lg:col-span-2 lg:row-span-3"
        )}
      >
        <div className={"flex flex-col gap-8"}>
          <h4 className={"text-4xl font-krona"}>{project.name}</h4>
          <p>{project.description}</p>

          <div className={"flex gap-4"}>
            {project.website && (
                <IconButton link={project.website}>
                  <Language height={24} width={24} />
                </IconButton>
            )}
            {project.github && (
                <IconButton link={project.github}>
                  <Github height={24} width={24} />
                </IconButton>
            )}
            {project.npm && (
                <IconButton link={project.npm}>
                  <Npm height={24} width={24} />
                </IconButton>
            )}
          </div>
        </div>
      </div>
      <Hoverable
          onClick={() => onClick(2)}
          className={classNames(
              "project-item h-52 flex justify-center items-center bg-white lg:col-span-2",
          { "opacity-100": project.name == "Unchef" }
        )}
      >
        <img src={"Projects/Unchef Logo.svg"} className={"h-16"} />
      </Hoverable>
      <Hoverable
        onClick={() => onClick(3)}
        className={classNames(
          "project-item h-52 flex justify-center items-center bg-emerald-600",
          { "opacity-100": project.name == "Metria Robots" }
        )}
      >
        <img src={"Projects/Metria Logo.png"} className={"h-16"} />
      </Hoverable>
      <Hoverable
          onClick={() => onClick(4)}
          className={classNames(
              "project-item h-52 flex justify-center items-center bg-white lg:col-span-3",
              { "opacity-100": project.name == "HusqPDF" }
          )}
      >
        <img src={"Projects/Husqpdf Logo.svg"} className={"h-16"} />
      </Hoverable>
    </div>
  );
}

export default Projects;
