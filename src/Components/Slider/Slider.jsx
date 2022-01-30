import React, { useState } from "react";
import "../../Styles/Slider/Slider.scss";
import ActiveThumbnails from "../ActiveImage/ActiveThumbnails";
import SliderContent from "../SliderContent/SliderContent";
import { useDispatch, useSelector } from "react-redux";
import { fetchImages } from "../../store/actions/fetchImages.actions";
import { useEffect } from "react";
import Loader from "../Loader/Loader";

const len = fetchImages.length - 1;

function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const dispatch = useDispatch();
  const { images, isLoading } = useSelector(
    (state) => state.fetchImagesReducer
  );
  useEffect(() => {
    dispatch(fetchImages());
  }, []);

  const nextImageFunction = () => {
    if (activeIndex === len) {
      return 0;
    } else if (activeIndex > 4) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  //Need some fixes on last prev item to get back on last in array
  const prevImageFunction = () => {
    if (activeIndex < 1) {
      return len;
    } else if (activeIndex === len || activeIndex === 0) {
      console.log(activeIndex, "ACTIVEEEEEE");
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <div className="sliderContainer">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ActiveThumbnails
            activeIndex={activeIndex}
            images={images}
            changeIndexFunction={(activeIndex) => setActiveIndex(activeIndex)}
          />
          <SliderContent
            activeImage={activeIndex}
            images={images}
            nextImage={nextImageFunction}
            prevImage={prevImageFunction}
          />
        </>
      )}
    </div>
  );
}

export default Slider;
