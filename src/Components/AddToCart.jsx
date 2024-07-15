import { useContext } from "react";
import { StoreContext } from "../Contexts/StoreContext";
import { Resources } from "../assets/Resources";
import { useNavigate } from "react-router-dom";

export default function AddToCart({ product }) {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="mb-10 flex flex-wrap tablet:flex-nowrap tablet:items-start justify-center tablet:justify-center">
      {cartItems[product.id] && (
        <div className="w-full tablet:w-[40%]  tablet:mr-10 relative">
          <p className="w-full mb-5 tablet:mb-0 text-center py-2 bg-gray-100 rounded-full">
            {cartItems[product.id]}
          </p>
          <img
            src={Resources.plusIcon}
            alt="icon"
            onClick={() => {
              addToCart(product.id);
            }}
            className="absolute right-2 top-1 cursor-pointer"
          />
          <img
            src={Resources.minusIcon}
            alt="icon"
            onClick={() => {
              removeFromCart(product.id);
            }}
            className="absolute left-2 top-1 cursor-pointer"
          />
        </div>
      )}

      {cartItems[product.id] ? (
        <button
          onClick={() => navigate("/cart")}
          className="border-1 border-[#774000] bg-[#774000] text-[#FFECD5] w-3/4 tablet:w-[20%] px-4 py-2 rounded-full"
        >
          View Cart
        </button>
      ) : (
        <button
          onClick={() => {
            if (!cartItems[product.id]) addToCart(product.id);
          }}
          className="border-1 border-[#774000] bg-[#774000] text-[#FFECD5] w-3/4 tablet:w-[20%] px-4 py-2 rounded-full"
        >
          Add To Cart
        </button>
      )}
    </div>
  );
}
