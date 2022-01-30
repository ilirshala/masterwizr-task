import React from "react";
import "../../Styles/ActiveImage/ActiveThumbnails.scss";

function ActiveThumbnails({ activeIndex, changeIndexFunction, images }) {
  return (
    <div className="activeThumbnail">
      {images.map((image, index) => (
        <div
          key={index}
          className={`${
            activeIndex === index
              ? "activeThumbnail_item activeItem"
              : "activeThumbnail_item"
          }`}
          style={{
            backgroundImage:
              activeIndex === index ? `url(${image.thumbnailUrl})` : "",
          }}
          onClick={() => changeIndexFunction(index)}
        ></div>
      ))}
    </div>
  );
}

export default ActiveThumbnails;
