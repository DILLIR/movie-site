import React from "react";
import "./Loader.css";
import loader_img from "../../../img/loader_img.svg";

function Loader() {
  return (
    <div className="loader__block">
      <img src={loader_img} alt="loading img" className="loader__img" />
    </div>
  );
}

export default Loader;
