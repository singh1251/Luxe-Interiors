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
    <section className="w-[90%] tablet:w-[45%] flex flex-wrap tablet:flex-nowrap h-auto tablet:h-[60%] mb-14 tablet:mb-0">
      <div className="w-full tablet:w-[20%]">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`w-full h-28 sm:h-32 md:h-36 tablet:h-28 rounded-2xl ${
              selectedImageIndex === index
                ? borderPaddingUpdated
                : borderPaddingOriginal
            } ${index === 4 ? "mb-10 tablet:mb-0" : "mb-4"}`}
          >
            <img
              src={img}
              alt="sofaImg"
              className="w-1/3 tablet:w-full h-full rounded-2xl cursor-pointer"
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

// export default function ProductImages({ img1, img2, img3, img4, img5 }) {
//   const [mainImage, setMainImage] = useState(img1);
//   const handleMainImage = (obj) => {
//     for (let ix in obj) {
//       if (obj[ix]) {
//         switch (ix) {
//           case "i1":
//             setMainImage(img1);
//             break;
//           case "i2":
//             setMainImage(img2);
//             break;
//           case "i3":
//             setMainImage(img3);
//             break;
//           case "i4":
//             setMainImage(img4);
//             break;
//           case "i5":
//             setMainImage(img5);
//             break;
//         }
//         break;
//       }
//     }
//   };

//   const [selectedImg, setSelectedImg] = useState({
//     i1: true,
//     i2: false,
//     i3: false,
//     i4: false,
//     i5: false,
//   });
//   const handleSelectedImg = (evt) => {
//     let updatedSelectedImg;
//     for (let ix in selectedImg) {
//       selectedImg[ix] = false;
//     }
//     updatedSelectedImg = { ...selectedImg, [evt.target.id]: true };

//     setSelectedImg(updatedSelectedImg);
//     handleMainImage(updatedSelectedImg);
//   };

//   const borderPaddingOriginal = "border border-gray-500";
//   const borderPaddingUpdated = "border-2 border-[#774000] p-2";

//   return (
//     <section className="w-[90%] tablet:w-[45%] flex flex-wrap tablet:flex-nowrap h-auto tablet:h-[60%] mb-14 tablet:mb-0">
//       <div className=" w-full tablet:w-[20%]">
//         <div
//           onClick={(evt) => handleSelectedImg(evt)}
//           className={`w-full h-28 sm:h-32 md:h-36 tablet:h-28 rounded-2xl mb-4 ${
//             selectedImg.i1 ? borderPaddingUpdated : borderPaddingOriginal
//           }`}
//         >
//           <img
//             id="i1"
//             src={img1}
//             alt="sofaImg"
//             className="w-1/3 tablet:w-full h-full rounded-2xl cursor-pointer"
//           />
//         </div>

//         <div
//           onClick={(evt) => handleSelectedImg(evt)}
//           className={`w-full h-28 sm:h-32 md:h-36 tablet:h-28 rounded-2xl mb-4 ${
//             selectedImg.i2 ? borderPaddingUpdated : borderPaddingOriginal
//           }`}
//         >
//           <img
//             id="i2"
//             src={img2}
//             alt="sofaImg"
//             className="w-1/3 tablet:w-full h-full rounded-2xl cursor-pointer"
//           />
//         </div>

//         <div
//           onClick={(evt) => handleSelectedImg(evt)}
//           className={`w-full h-28 sm:h-32 md:h-36 tablet:h-28 rounded-2xl mb-4 ${
//             selectedImg.i3 ? borderPaddingUpdated : borderPaddingOriginal
//           }`}
//         >
//           <img
//             id="i3"
//             src={img3}
//             alt="sofaImg"
//             className="w-1/3 tablet:w-full h-full rounded-2xl cursor-pointer"
//           />
//         </div>

//         <div
//           onClick={(evt) => handleSelectedImg(evt)}
//           className={`w-full h-28 sm:h-32 md:h-36 tablet:h-28 rounded-2xl mb-4 ${
//             selectedImg.i4 ? borderPaddingUpdated : borderPaddingOriginal
//           }`}
//         >
//           <img
//             id="i4"
//             src={img4}
//             alt="sofaImg"
//             className="w-1/3 tablet:w-full h-full rounded-2xl cursor-pointer"
//           />
//         </div>

//         <div
//           onClick={(evt) => handleSelectedImg(evt)}
//           className={`w-full h-28 sm:h-32 md:h-36 tablet:h-28 rounded-2xl mb-10 tablet:mb-0 ${
//             selectedImg.i5 ? borderPaddingUpdated : borderPaddingOriginal
//           }`}
//         >
//           <img
//             id="i5"
//             src={img5}
//             alt="sofaImg"
//             className="w-1/3 tablet:w-full h-full rounded-2xl cursor-pointer"
//           />
//         </div>
//       </div>

//       <div className="w-full tablet:w-[75%] tablet:ml-3 md:flex rounded-2xl">
//         <img src={mainImage} alt="sofaImg" className="w-full rounded-2xl" />
//       </div>
//     </section>
//   );
// }
