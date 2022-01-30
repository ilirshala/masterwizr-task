import React from "react";
import "../../Styles/SliderContent/SliderContent.scss";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function SliderContent({ activeImage, images, nextImage, prevImage }) {
  return (
    <div className="sliderContent">
      <div className="sliderContent_buttons" onClick={prevImage}>
        <ArrowBackIosIcon />
      </div>

      {images.map((image, index) => {
        return (
          <div
            key={index}
            className={
              index === activeImage
                ? "sliderContent_allImages activeImage"
                : "sliderContent_allImages noActiveImage"
            }
          >
            <img src={image.url} className="image" />
          </div>
        );
      })}
      <div className="sliderContent_buttons" onClick={nextImage}>
        <ArrowForwardIosIcon />
      </div>
    </div>
  );
}

export default SliderContent;
