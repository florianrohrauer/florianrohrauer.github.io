import React, { Fragment } from "react";

function Stagger({ children }) {
  return (
    <Fragment>
      {children.map((child, index) => (
        <div
          key={index}
          className={"stagger-child"}
          style={{ ["--stagger-order" as any]: index }}
        >
          {child}
        </div>
      ))}
    </Fragment>
  );
}

export default Stagger;
