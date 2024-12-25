import React, { useEffect, useState } from "react";
import { Data } from "../ComponentData/HeroData";
import { useMediaQuery } from "react-responsive";
import { useInView } from "react-intersection-observer"; // Import the hook

function Hero() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 }); // Hook to detect when the image is in view

  // Media query to detect screen size
  const isLargeSc = useMediaQuery({ query: "(min-width: 768px)" });

  useEffect(() => {
    const preloadImages = () => {
      Data.forEach((slide) => {
        const img = new Image();
        img.src = slide.image;
      });
    };
    preloadImages();

    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) =>
        prev === Data.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setLoaded(false); // Reset the loading state
    setCurrentSlideIndex((prev) =>
      prev === Data.length - 1 ? 0 : prev + 1
    );
  };

  const previous = () => {
    setLoaded(false); // Reset the loading state
    setCurrentSlideIndex((prev) =>
      prev === 0 ? Data.length - 1 : prev - 1
    );
  };

  const handleImageLoad = () => {
    setLoaded(true); // Set loaded to true once the image is fully loaded
  };

  return (
    <div id="home" className="relative w-full h-[53rem] 2xl:h-screen xl:h-screen lg:h-screen md:h-screen">
      {/* Hero Image with Intersection Observer */}
      <img
        ref={ref} // Attach the ref to the image for visibility detection
        src={inView
          ? isLargeSc
            ? Data[currentSlideIndex]?.imageLgSc
            : Data[currentSlideIndex]?.imageSmSc
          : ""} // Load image only when it's in view
        alt={`Slide ${currentSlideIndex}`}
        className={`h-full w-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={handleImageLoad}
      />

      {/* Navbar */}
      <div className="flex justify-between items-center w-full absolute top-4 text-white px-5">
        <h1 className="text-2xl sm:text-3xl font-extrabold">OLA</h1>
        <i className="fa-solid fa-bars text-2xl sm:text-3xl font-extrabold"></i>
      </div>

      {/* Text Overlay */}
      {loaded && (
        <div
          className="absolute w-full h-full flex flex-col justify-start items-center text-center text-white px-4 
          transition-opacity duration-500 opacity-100"
          style={{
            top: "60%",
            transform: "translateY(-50%)",
          }}
        >
          {Data[currentSlideIndex]?.heading && (
            <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold mb-2 xl:text-6xl xl:mb-3 2xl:text-5xl">
              {Data[currentSlideIndex].heading}
            </h1>
          )}
          {Data[currentSlideIndex]?.subheading && (
            <p className="text-lg sm:text-lg md:text-4xl  xl:text-5xl font-medium mb-2 xl:mb-5 2xl:text-3xl">
              {Data[currentSlideIndex].subheading}
            </p>
          )}
          {Data[currentSlideIndex]?.price && (
            <p className="text-sm sm:text-md md:text-2xl mb-2">
              {Data[currentSlideIndex].price}
            </p>
          )}
          {Data[currentSlideIndex]?.buttonText && (
            <button className="px-6 py-2 text-sm sm:text-lg bg-white text-black rounded">
              {Data[currentSlideIndex].buttonText} →
            </button>
          )}
        </div>
      )}

      {/* Navigation Arrows */}
      <i
        onClick={next}
        className="fa-regular fa-circle-right absolute top-[50%] right-4 sm:right-8 text-2xl sm:text-3xl opacity-10 hover:opacity-100 text-white cursor-pointer"
      ></i>
      <i
        onClick={previous}
        className="fa-regular fa-circle-left absolute top-[50%] left-4 sm:left-8 text-2xl sm:text-3xl opacity-10 hover:opacity-100 text-white cursor-pointer"
      ></i>
    </div>
  );
}

export default Hero;
