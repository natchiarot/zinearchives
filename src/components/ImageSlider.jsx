import { useState, useEffect } from "react";
import useMediaQuery from "react-responsive";

const ImageSlider = ({ images, children, onImageClick, containerStyles }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    if (currentIndex < 0) {
      setCurrentIndex(images.length - 1);
    } else if (currentIndex >= images.length) {
      setCurrentIndex(0);
    }
  }, [currentIndex, images]);

  const sliderStyles = {
    position: "relative",
    width: "400px",
    ...containerStyles,
  };

  const slideStyles = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    width: "100%",
    height: "auto",
    borderRadius: "1em",
    border: "solid 5px",
    borderColor: "rgb(50, 50, 50)",
    // boxShadow: "0 5px 0 rgb(45, 45, 61)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    position: "relative",
    maxWidth: "100%",
    alignContent: "center",
    margin: "0 auto",
  };

  const mediaQuery = "@media (max-width: 768px)";

  const responsiveStyles = {
    [mediaQuery]: {
      sliderStyles: {
        maxWidth: "50%", // Adjust the maximum width for smaller screens
        padding: "1em", // Adjust padding for smaller screens
      },
      slideStyles: {
        flexDirection: "column", // Adjust flex direction for smaller screens
        borderRadius: "0", // Adjust border-radius for smaller screens
        border: "solid 3px", // Adjust border for smaller screens
        borderColor: "rgb(30, 30, 30)", // Adjust border color for smaller screens
        padding: "1em", // Adjust padding for smaller screens
      },
      containerStyles: {
        padding: "1em", // Adjust padding for smaller screens
      },
    },
  };

  const mergedStyles = {
    ...sliderStyles,
    ...responsiveStyles.sliderStyles,
    ...slideStyles,
    ...responsiveStyles.slideStyles,
    ...containerStyles,
    ...responsiveStyles.containerStyles,
  };

  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0,-50%)",
    left: "0",
    margin: "-10px",
    fontSize: "45px",
    color: "rgb(42, 42, 42)",
    zIndex: 1,
    cursor: "pointer",
    fontWeight: "bold",
    textShadow:
      "-2px -2px 0 rgb(90, 90, 90), 2px -2px 0 rgb(51, 51, 51), -2px 2px 0 rgb(51, 51, 51), 2px 2px 0 rgb(51, 51, 51)",
  };

  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0,-50%)",
    right: "0",
    margin: "-10px",
    fontSize: "45px",
    color: "rgb(42, 42, 42)",
    zIndex: 1,
    cursor: "pointer",
    fontWeight: "bold",
    textShadow:
      "-2px -2px 0 rgb(90, 90, 90), 2px -2px 0 rgb(51, 51, 51), -2px 2px 0 rgb(51, 51, 51), 2px 2px 0 rgb(51, 51, 51)",
  };

  const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
  };

  const dotStyles = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "30px",
    fontWeight: "bold",
    color: "rgb(42, 42, 42)",
    textShadow:
      "-2px -2px 0 rgb(90, 90, 90), 2px -2px 0 rgb(51, 51, 51), -2px 2px 0 rgb(51, 51, 51), 2px 2px 0 rgb(51, 51, 51)",
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (imageIndex) => {
    setCurrentIndex(imageIndex);
  };

  return (
    <div
      style={{
        ...sliderStyles,
        ...(isMobile && sliderStyles.mobile),
      }}
    >
      <div style={leftArrowStyles} onClick={goToPrevious}>
        &lt;
      </div>
      <div style={rightArrowStyles} onClick={goToNext}>
        &gt;
      </div>
      <div
        style={{
          ...slideStyles,
          ...(isMobile && slideStyles.mobile),
        }}
        onClick={onImageClick}
      >
        <img
          src={images[currentIndex].data}
          alt={`Slide ${currentIndex}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "1em",
          }}
        />
        {children}
      </div>
      <div style={dotsContainerStyles}>
        {images.map((image, slideIndex) => (
          <div
            key={slideIndex}
            style={dotStyles}
            onClick={() => goToSlide(slideIndex)}
          >
            &#x2022;
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
