import { useContext } from "react";
import { Resources, Products } from "../assets/Resources";
import { StoreContext } from "../Contexts/StoreContext";
import { useNavigate } from "react-router-dom";

import FavButton from "./FavButton";
import Rating from "./Rating";

export default function ProductBlock({
  rating,
  outOf,
  relatedProduct = Products[37],
}) {
  const { cartItems, addToCart } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <>
      <div className="w-full relative mb-4">
        <img
          src={relatedProduct.image}
          alt="image"
          className="w-full h-full rounded-2xl"
        />
        <div className="w-[40px] h-[40px] absolute top-2 right-2 rounded-full bg-white">
          <FavButton />
        </div>
        <div className="w-[90px] h-[30px] absolute bottom-2 right-1 bg-white rounded-xl">
          <Rating rating={rating} outOf={outOf} />
        </div>
      </div>

      <div className="w-full flex justify-between items-start">
        <div className="w-[72%] mb-10 tablet:mb-0">
          <p className="font-bold mb-2">{relatedProduct.name}</p>

          <p className="text-gray-500 mb-4">
            The minimal design looks great anywhere.
          </p>

          <p className="font-semibold">{`$${relatedProduct.price}`}</p>
        </div>

        {cartItems[relatedProduct.id] ? (
          <button
            onClick={() => navigate("/cart")}
            className="w-[25%] text-[12px] text-[#ffecd5] bg-[#774000] p-2 rounded-lg"
          >
            View Cart
          </button>
        ) : (
          <button
            onClick={() => {
              if (!cartItems[relatedProduct.id]) addToCart(relatedProduct.id);
            }}
            className="w-[40px] border-2 border-[#774000] p-2 rounded-lg"
          >
            <img src={Resources.shoppingCartIcon} alt="icon" />
          </button>
        )}
      </div>
    </>
  );
}
