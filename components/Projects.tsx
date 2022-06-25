import React, { useEffect, useMemo, useState } from "react";
import { className } from "postcss-selector-parser";
import classNames from "classnames";

const DIASHOW_DURATION = 25 * 1000; // Seconds
const PROJECTS = require("/public/Projects.json");

function Projects() {
  const [index, setIndex] = useState(0);
  const project = useMemo(() => PROJECTS[index], [index]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index + 1 >= PROJECTS.length) {
        setIndex(0);
      } else setIndex(index + 1);
    }, DIASHOW_DURATION);

    return () => {
      clearInterval(interval);
    };
  }, [index]);

  return (
    <div className={"grid grid-cols-2 row-span-2 md:grid-cols-5 gap-4"}>
      <div
        onClick={() => setIndex(0)}
        className={classNames(
          "project-item col-span-2 md:col-span-1 h-52 flex justify-center items-center bg-white",
          { "opacity-100": project.name == "My Zone" }
        )}
      >
        <img src={"Projects/MyZone Logo.png"} className={"h-24"} />
      </div>
      <div
        onClick={() => setIndex(1)}
        className={classNames(
          "project-item col-span-2 h-52 flex justify-center items-center bg-indigo-600",
          { "opacity-100": project.name == "Velo" }
        )}
      >
        <img src={"Projects/Velo Logo.png"} className={"h-28"} />
      </div>
      <div
        className={
          "bg-[#2a2a2a] col-span-2 row-span-2 p-6 space-y-6 row-start-1 md:row-start-auto"
        }
      >
        <h4 className={"text-4xl font-krona"}>{project.name}</h4>
        <p>{project.description}</p>
      </div>
      <div
        onClick={() => setIndex(2)}
        className={classNames(
          "project-item col-span-2 h-52 flex justify-center items-center bg-white",
          { "opacity-100": project.name == "Unchef" }
        )}
      >
        <img src={"Projects/Unchef Logo.png"} className={"h-16"} />
      </div>
      <div
        onClick={() => setIndex(3)}
        className={classNames(
          "project-item h-52 flex justify-center items-center bg-emerald-600 col-span-2 md:col-span-1",
          { "opacity-100": project.name == "Metria Robots" }
        )}
      >
        <img src={"Projects/Metria Logo.png"} className={"h-16"} />
      </div>
    </div>
  );
}

export default Projects;
