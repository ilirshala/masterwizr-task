import React from "react";
import "../../Styles/ActiveImage/ActiveThumbnails.scss";

function ActiveThumbnails({ activeIndex, changeIndexFunction, images }) {
  return (
    <section class="card">
      {images.map((image, index) => (
        <div className="card--content">
          <div
            className={`${
              activeIndex === index ? "thumbnail active" : "thumbnail"
            }`}
            key={index}
            onClick={() => changeIndexFunction(index)}
            style={{
              backgroundImage:
                activeIndex === index ? `url(${image.thumbnailUrl})` : "",
            }}
          ></div>
          <p>{image.title.split(" ").shift()}</p>
        </div>
      ))}
    </section>
  );
}

export default ActiveThumbnails;
