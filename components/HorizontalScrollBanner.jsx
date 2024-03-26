import React, { useRef, useEffect } from "react";
import Image from "next/image";

const HorizontalScrollBanner = ({ images }) => {
  const scrollContainerRef = useRef(null);
  let touchStartX = 0;
  let touchEndX = 0;

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollInterval;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (
          scrollContainer.scrollLeft + scrollContainer.offsetWidth >=
          scrollContainer.scrollWidth
        ) {
          // If we reach the end, scroll back to the beginning
          scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Otherwise, scroll to the right by 1 pixel
          scrollContainer.scrollBy({ left: 2, behavior: "smooth" });
        }
      }, 10); // Adjust speed by changing the interval (in milliseconds)
    };

    const stopScrolling = () => {
      clearInterval(scrollInterval);
    };

    // Start scrolling when component mounts
    startScrolling();

    // Stop scrolling when component unmounts
    return () => {
      stopScrolling();
    };
  }, []);

  const handleTouchStart = (event) => {
    touchStartX = event.touches[0].clientX;
  };

  const handleTouchMove = (event) => {
    touchEndX = event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 20) {
      // Swipe left detected, scroll to the right
      scrollContainerRef.current.scrollBy({
        left: 100, // Adjust scroll distance as needed
        behavior: "smooth",
      });
    } else if (touchEndX - touchStartX > 20) {
      // Swipe right detected, scroll to the left
      scrollContainerRef.current.scrollBy({
        left: -100, // Adjust scroll distance as needed
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      ref={scrollContainerRef}
      className="flex overflow-x-auto w-full mx-auto md:w-full lg:w-full xl:w-full md:h-64 lg:h-80 xl:h-96"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        "-ms-overflow-style": "none",
        "scrollbar-width": "none",
        "overflow-y": "hidden",
      }}
    >
      {images.map((image, index) => (
        <div key={index} className="flex-none w-4/5 md:w-96 lg:w-96 xl:w-96">
          <Image
            width={1920}
            height={1080}
            src={image.src}
            alt={`Image ${index}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default HorizontalScrollBanner;
