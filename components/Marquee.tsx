import useWindowSize from "../hooks/useWindowSize";
import { motion } from "framer-motion";
import React, { useMemo } from "react";
import classNames from "classnames";

function Marquee({
  imageSource,
  size,
  space = 100,
  vertical = true,
  duration = 15,
}) {
  const { height } = useWindowSize();

  const variants = useMemo(() => {
    return {
      animate: {
        [vertical ? "y" : "x"]: [0, -size - space],
        transition: {
          [vertical ? "y" : "x"]: {
            repeat: Infinity,
            repeatType: "loop",
            duration,
            ease: "linear",
          },
        },
      },
    };
  }, [size, space, vertical]);

  return (
    <motion.div
      className={classNames("h-full w-full text-center", { flex: !vertical })}
      animate={"animate"}
      variants={variants}
    >
      <img src={imageSource} className={"m-auto"} alt={"Background"} />
      <div style={{ [vertical ? "height" : "width"]: space }} />
      <img src={imageSource} className={"m-auto"} alt={"Background"} />
      <div style={{ [vertical ? "height" : "width"]: space }} />
      <img src={imageSource} className={"m-auto"} alt={"Background"} />
    </motion.div>
  );
}

export default Marquee;
