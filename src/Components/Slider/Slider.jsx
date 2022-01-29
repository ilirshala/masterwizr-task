import React from "react";
import "../../Styles/Slider/Slider.scss";
import ActiveThumbnails from "../ActiveImage/ActiveThumbnails";
import SliderContent from "../SliderContent/SliderContent";

function Slider() {
  return (
    <div className="sliderContainer">
      <ActiveThumbnails />
      <SliderContent />
    </div>
  );
}

export default Slider;
