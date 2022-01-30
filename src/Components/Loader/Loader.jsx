import React from "react";
import "./Loader.scss";

function Loader() {
  return (
    <div className="loader">
      <p>Loading...</p>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
