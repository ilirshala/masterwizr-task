import "../../Styles/SliderContent/SliderContent.scss";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useEffect, useState } from "react";

function SliderContent({ activeImage, images, nextImage, prevImage }) {
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [checkIsMobile, setCheckIsMobile] = useState(false);

  function getPositionX(event) {
    return event.type.includes("mouse")
      ? event.pageX
      : event.touches[0].clientX;
  }

  const setPositionByIndex = () => {
    setCurrentTranslate(currentIndex * -window.innerWidth);
    setPrevTranslate(currentTranslate);
  };

  const touchStart = (index) => {
    return function (event) {
      setCurrentIndex(index);
      setStartPosition(getPositionX(event));
      setIsDragging(true);
    };
  };

  const touchMove = (event) => {
    if (isDragging) {
      const currentPosition = getPositionX(event);
      setCurrentTranslate(prevTranslate + currentPosition - startPosition);
    }
  };

  const touchEnd = () => {
    setIsDragging(false);
    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -100 && currentIndex < images.length - 1) nextImage();
    if (movedBy > 100 && currentIndex > 0) prevImage();
    setPositionByIndex();
  };

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      if (e.currentTarget.innerWidth > 1000) {
        setCheckIsMobile(false);
      } else {
        setCheckIsMobile(true);
      }
    });
  }, []);

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
            id="slider"
            onTouchStart={checkIsMobile ? touchStart(index) : () => {}}
            onTouchMove={checkIsMobile ? touchMove : () => {}}
            onTouchEnd={checkIsMobile ? touchEnd : () => {}}
          >
            <img src={image.url} className="image" alt={image.title} />
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
