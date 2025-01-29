// FeatureImg.js
import  { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

// Import your static image
import featureImage from "@/assets/your-image-path.jpg"; // replace with your image path

function FeatureImg() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // In this case, we have only one image, so navigation doesn't make sense
  // But if you plan to add more images, you can add them to the array
  const images = [featureImage]; // Example with a single static image

  function handlePrevSlide() {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  }

  function handleNextSlide() {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  }

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <img
        src={images[currentSlide]} // Display the current image in the array
        alt="Featured"
        className="w-full h-full object-cover"
      />
      {images.length > 1 && (
        <>
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80"
          >
            <ChevronLeftIcon className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={handleNextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80"
          >
            <ChevronRightIcon className="w-4 h-4" />
          </Button>
        </>
      )}
    </div>
  );
}

export default FeatureImg;
