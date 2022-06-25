import React, { createContext, useEffect, useRef, useState } from "react";

export const CursorContext = createContext({
  isHovered: false,
  setHovered: (_: boolean) => console.error("No Context!"),
  onMouseDown: () => console.error("No Context!"),
  onMouseUp: () => console.error("No Context!"),
});

function Cursor({ children }) {
  const [isHovered, setHovered] = useState<boolean>(false);
  const cursor = useRef<HTMLDivElement>(null);
  const cursorInner = useRef<HTMLDivElement>(null);

  const onMouseDown = () => {
    const onAnimationEnd = () => {
      cursor.current?.classList.remove("active");
      cursor.current?.removeEventListener("animationend", onAnimationEnd);
    };

    cursor.current?.classList.toggle("active", true);
    cursor.current?.addEventListener("animationend", onAnimationEnd);
  };

  const onMouseUp = () => {};

  useEffect(() => {
    const onMouseMove = (e) => {
      if (cursor.current && cursorInner.current) {
        let style = `top:${e.clientY - 16}px;left:${e.clientX - 16}px;`;
        let styleInner = `top:${e.clientY - 2}px;left:${e.clientX - 2}px;`;

        const { classList } = cursor.current;
        const isCurrentlyHovered = classList.contains("hovered");

        if (!isCurrentlyHovered && isHovered) {
          classList.add("hovered");
        } else if (isCurrentlyHovered && !isHovered) {
          classList.remove("hovered");
        }

        cursor.current.setAttribute("style", style);
        cursorInner.current.setAttribute("style", styleInner);
      }
    };

    document.body.addEventListener("mousemove", onMouseMove);

    return () => {
      document.body.removeEventListener("mousemove", onMouseMove);
    };
  }, [isHovered]);

  return (
    <CursorContext.Provider
      value={{ isHovered, setHovered, onMouseDown, onMouseUp }}
    >
      <div className={"xl:cursor-none"}>
        <div
          className={
            "cursor passive z-50 pointer-events-none invisible xl:visible"
          }
          id={"outer-cursor"}
          ref={cursor}
        />
        <div
          className={
            "cursor-inner z-50 pointer-events-none invisible xl:visible"
          }
          ref={cursorInner}
        />
        {children}
      </div>
    </CursorContext.Provider>
  );
}

export default Cursor;
