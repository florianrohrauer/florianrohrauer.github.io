import React, {createContext, useEffect, useRef, useState} from "react";

export const CursorContext = createContext({
  isHovered: false,
  setHovered: (_: boolean) => console.error("No Context!"),
  onMouseDown: () => console.error("No Context!")
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

  useEffect(() => {
    const onMouseMove = (e) => {
      if (cursor.current && cursorInner.current) {
        const { classList } = cursor.current;
        const isCurrentlyHovered = classList.contains("hovered");

        if (!isCurrentlyHovered && isHovered) {
          classList.add("hovered");
        } else if (isCurrentlyHovered && !isHovered) {
          classList.remove("hovered");
        }

        const scale = isCurrentlyHovered ? 2 : 1;

        const outerCursorStyle = `
          transform: translate(${e.clientX - 16}px, ${e.clientY - 16}px) 
          scale(${scale})
        `

        const innerCursorStyle = `transform: 
          translate(${e.clientX - 2}px, ${e.clientY - 2}px) 
          scale(${scale})
        `

        cursor.current.setAttribute("style", outerCursorStyle);
        cursorInner.current.setAttribute("style", innerCursorStyle);
      }
    };

    document.body.addEventListener("mousemove", onMouseMove);

    return () => {
      document.body.removeEventListener("mousemove", onMouseMove);
    };
  }, [isHovered]);

  return (
    <CursorContext.Provider value={{ isHovered, setHovered, onMouseDown }}>
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
