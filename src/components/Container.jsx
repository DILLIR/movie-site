import React from "react";

function Container({ children, className }) {
  return (
    <div
      className={className ? ["container", className].join(" ") : "container"}
    >
      {children}
    </div>
  );
}

export default Container;
