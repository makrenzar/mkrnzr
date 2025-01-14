import React, { useState } from "react";
import image2 from "../assets/sha.jpg";
import image3 from "../assets/sjj.jpg";
import image4 from "../assets/va.jpg";
import Header from "../components/Header";
import View from "./View";

const images = [image2, image3, image4];

function Media() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen text-white px-8 py-10 flex justify-center">
      <div className="max-w-[1100px] w-full">
        <Header />
        <p className="text-sm text-center mb-10">
          A collection of projects, designs, photos, and experiments from recent years.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(src)}
            >
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="w-[286px] h-[286px] object-cover rounded-md border border-[#232326]"
              />
            </div>
          ))}
        </div>

        {selectedImage && <View src={selectedImage} onClose={() => setSelectedImage(null)} />}
      </div>
    </div>


  );
}

export default Media;
