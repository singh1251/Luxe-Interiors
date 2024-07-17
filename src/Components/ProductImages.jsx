import { useState } from "react";

export default function ProductImages({ img1, img2, img3, img4, img5 }) {
  const images = [img1, img2, img3, img4, img5];
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleClick = (index) => {
    setSelectedImageIndex(index);
  };

  const borderPaddingOriginal = "border border-gray-500";
  const borderPaddingUpdated = "border-2 border-[#774000] p-2";

  return (
    <section className="w-[90%] tablet:w-[50%] flex flex-wrap tablet:flex-nowrap h-auto tablet:h-[60%] mb-14 tablet:mb-0">
      <div className="w-full flex flex-wrap justify-between tablet:w-[20%]">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`w-[45%] tablet:w-full tablet:h-[115px] rounded-2xl ${
              selectedImageIndex === index
                ? borderPaddingUpdated
                : borderPaddingOriginal
            } ${index === 4 ? "mb-10 tablet:mb-0" : "mb-4"}`}
          >
            <img
              src={img}
              alt="sofaImg"
              className="w-full h-full rounded-2xl cursor-pointer"
            />
          </div>
        ))}
      </div>
      <div className="w-full tablet:w-[75%] tablet:ml-3 md:flex rounded-2xl">
        <img
          src={images[selectedImageIndex]}
          alt="mainSofaImg"
          className="w-full rounded-2xl"
        />
      </div>
    </section>
  );
}
