import React, { useState, useEffect } from "react";
import image2 from "../assets/sha.jpg";
import image3 from "../assets/sjj.jpg";
import image4 from "../assets/va.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";

const images = [
  {
    src: image2,
    alt: "Social Hub Agency",
    className:
      "w-[286px] h-[300px] object-cover rounded-md border border-[#232326]",
    sizeClass: "w-[500px] h-[400px]",
  },
  {
    src: image3,
    alt: "Stephen's Portfolio",
    className:
      "w-[286px] h-[300px] object-cover rounded-md border border-[#232326]",
    sizeClass: "w-[500px] h-[400px]",
  },
  {
    src: image4,
    alt: "Vincent's Portfolio",
    className:
      "w-[286px] h-[300px] object-cover rounded-md border border-[#232326]",
    sizeClass: "w-[500px] h-[400px]",
  },
  {
    src: image4,
    alt: "Vincent's Portfolio",
    className:
      "w-[286px] h-[300px] object-cover rounded-md border border-[#232326]",
    sizeClass: "w-[500px] h-[400px]",
  },
];

function Media() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleClickOutside = (event) => {
    if (event.target === event.currentTarget) {
      setSelectedImage(null);
    }
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="min-h-screen px-8 py-10 flex justify-center">
        <div className="max-w-[1170px] w-full ">
          <Header />
          <p className="text-sm text-center mb-10 animate-slideFromDownAndFade [animation-delay:var(--animation-delay)]">
            A collection of projects, designs, photos, and experiments from
            recent years.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[5px] justify-center animate-slideFromDownAndFade [animation-delay:var(--animation-delay)]">
            {images.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden cursor-pointer flex justify-center"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={image.className}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>

          {selectedImage && (
            <div
              className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex items-center justify-center z-50"
              onClick={handleClickOutside}
            >
              <div className="relative">
                <img
                  src={selectedImage.src}
                  alt="Enlarged view"
                  className={`rounded-lg ${selectedImage.sizeClass}`}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <p
                className="absolute bottom-24 text-sm px-2 py-1 cursor-pointer bg-[#515151] rounded-md border border-[#808080]"
                onClick={handleClose}
              >
                ESC
              </p>
              {/* <p className="absolute bottom-60 text-sm  ">ON GOING</p> */}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Media;
