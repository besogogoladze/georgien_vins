import React, { useRef } from "react";
import slide_1 from "../../Icons/slide_1.jpg";
import slide_2 from "../../Icons/slide_2.jpg";
import Carousel from "react-elastic-carousel";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import { Button } from "@mui/material";
import { CartState } from "../../Context/UseContext";

const HomeCarousel = () => {
  const carousel = useRef(null);
  const ArrowStyle = useRef(null)
  const {
    state: { theme },
  } = CartState();

  return (
    <div style={{ display: "flex", position: "relative" }}>
      <Button
        style={{
          position: "absolute",
          left: "20px",
          top: "50%",
          zIndex: "1000",
        }}
        onClick={() =>
          carousel.current.state.activeIndex !== 0
            ? carousel.current.slidePrev()
            : carousel.current.goTo(carousel.current.state.pages.length - 1)
        }
      >
        <ArrowCircleLeftOutlinedIcon
          style={{
            fontSize: "40px",
            color: theme === "light" ? "#fff" : "#980433",
          }}
        />
      </Button>
      <Carousel
        enableTilt={true}
        ref={carousel}
        itemsToShow={1}
        // enableAutoPlay={true}
        // autoPlaySpeed={2500}
        showArrows={false}
        enableSwipe={false}
        enableMouseSwipe={false}
        // onChange={(currentItem) =>
        //   currentItem.index !== carousel.current.state.pages.length - 1
        //     ? carousel.current.goTo(currentItem.index + 1)
        //     : carousel.current.goTo(0)
        // }
      >
        <img style={{ width: "100%" }} src={slide_1} alt="Img Error" />
        <img style={{ width: "100%" }} src={slide_2} alt="Img Error" />
      </Carousel>
      <Button
      ref={ArrowStyle}
        style={{ position: "absolute", right: "20px", top: "50%" }}
        onClick={() =>
          carousel.current.state.activeIndex !==
          carousel.current.state.pages.length - 1
            ? carousel.current.slideNext()
            : carousel.current.goTo(0)
        }
        >
        <ArrowCircleRightOutlinedIcon
          style={{
            fontSize: "40px",
            color: theme === "light" ? "#fff" : "#980433",
          }}
          />
      </Button>
    </div>
  );
};

export default HomeCarousel;
