import React, {ComponentProps, useContext} from "react";
import {CursorContext} from "./Cursor";

function Hoverable({ children, onClick, ...props }: ComponentProps<"div">) {
  const { setHovered, onMouseDown } = useContext(CursorContext);

  return (
    <div
      className={"transition-transform duration-200"}
      onMouseDown={onMouseDown}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...props}
    >
      {children}
    </div>
  );
}

export default Hoverable;
