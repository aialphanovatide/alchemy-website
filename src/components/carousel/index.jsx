import React, { useEffect, useRef, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./carousel.css";
import Home from "../home";
import Tools from "../tools";
import Impact from "../impact";
import Flow from "../flow";
import Begin from "../begin";
import Vision from "../vision";

function Carousel({ slideIndex, setSlideIndex }) {
  const splideRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    setSlideIndex(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    if (splideRef.current) {
      splideRef.current.go(slideIndex);
    }
  }, [slideIndex]);

  return (
    <>
      <div className="slide_container">
        <Splide
          ref={splideRef}
          options={{
            type: "loop",
            perPage: 1,
            autoHeight: true,
            height: "auto",
            width: "100%",
          }}
          onMove={(splide, newIndex) => setCurrentIndex(newIndex)}
        >
          <SplideSlide className="splide-slide is-active">
            <Home />
          </SplideSlide>
          <SplideSlide className="splide-slide">
            <Vision isActive={currentIndex === 1} />
          </SplideSlide>
          <SplideSlide className="splide-slide">
            <Tools isActive={currentIndex === 2} />
          </SplideSlide>
          <SplideSlide className="splide-slide">
            <Flow />
          </SplideSlide>
          <SplideSlide className="splide-slide">
            <Impact isActive={currentIndex === 4} />
          </SplideSlide>
          <SplideSlide className="splide-slide">
            <Begin />
          </SplideSlide>
        </Splide>
      </div>
    </>
  );
}

export default Carousel;
