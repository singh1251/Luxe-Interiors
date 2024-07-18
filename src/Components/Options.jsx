import { useState } from "react";
import AddToCart from "./AddToCart";

export default function Options({
  product,
  productImg1,
  des1,
  productImg2,
  des2,
  productImg3,
  des3,
}) {
  const [selected, setIsSelected] = useState("div1");

  const borderSelected = "border-2 border-[#774000]";
  const borderOriginal = "border border-gray=500";

  return (
    <section className="w-[90%] my-14">
      <h2 className="text-xl font-bold mb-5">Options</h2>
      <div className="w-full mb-20 sm:flex sm:flex-wrap sm:justify-between">
        <div
          onClick={() => setIsSelected("div1")}
          className={`w-full sm:w-[45%] tablet:w-[30%] p-2 rounded-2xl mb-8 tablet:mb-0 flex flex-wrap justify-center cursor-pointer ${
            selected === "div1" ? borderSelected : borderOriginal
          }`}
        >
          <img
            src={productImg1}
            alt="sofaImg"
            className="w-[80%] h-[80%] rounded-2xl"
          />
          <p className="w-full text-center text-sm">{des1}</p>
        </div>

        <div
          onClick={() => setIsSelected("div2")}
          className={`w-full sm:w-[45%] tablet:w-[30%] p-2 rounded-2xl mb-8 tablet:mb-0 flex flex-wrap justify-center cursor-pointer ${
            selected === "div2" ? borderSelected : borderOriginal
          }`}
        >
          <img
            src={productImg2}
            alt="sofaImg"
            className="w-[80%] h-[80%] rounded-2xl"
          />
          <p className="w-full text-center text-gray-500 text-sm">{des2}</p>
        </div>

        <div
          onClick={() => setIsSelected("div3")}
          className={`w-full sm:w-[45%] tablet:w-[30%] p-2 rounded-2xl mb-8 tablet:mb-0 flex flex-wrap justify-center cursor-pointer ${
            selected === "div3" ? borderSelected : borderOriginal
          }`}
        >
          <img
            src={productImg3}
            alt="sofaImg"
            className="w-[80%] h-[80%] rounded-2xl"
          />
          <p className="w-full text-center text-gray-500 text-sm">{des3}</p>
        </div>
      </div>

      <AddToCart product={product} />
    </section>
  );
}
