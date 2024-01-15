import { useState, useEffect } from "react";

const ImageSlider = ({ images, children, onImageClick, containerStyles }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < 0) {
      setCurrentIndex(images.length - 1);
    } else if (currentIndex >= images.length) {
      setCurrentIndex(0);
    }
  }, [currentIndex, images]);

  const sliderStyles = {
    position: "relative",
    maxWidth: "400px",
    ...containerStyles,
  };

  const slideStyles = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "1em",
    border: "solid 5px",
    borderColor: "rgb(50, 50, 50)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    position: "relative",
    width: "200px",
    alignContent: "center",
    margin: "0 auto",
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
    <div className="media-box">
      <div style={sliderStyles}>
        <div style={leftArrowStyles} onClick={goToPrevious}>
          &lt;
        </div>
        <div style={rightArrowStyles} onClick={goToNext}>
          &gt;
        </div>
        <div style={slideStyles} onClick={onImageClick}>
          <img
            src={images[currentIndex].data}
            alt={`Slide ${currentIndex}`}
            style={{
              width: "200px",
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
    </div>
  );
};

export default ImageSlider;
