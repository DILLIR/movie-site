import React from "react";
import cl from "./Modal.module.css";

function Modal({ children, isVisible, setVisible }) {
  let classes = [cl.modal];

  if (isVisible) {
    classes.push(cl.active);
  }

  return (
    <div className={classes.join(" ")} onClick={(e) => setVisible(false)}>
      <div
        className={cl.modal__container}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
