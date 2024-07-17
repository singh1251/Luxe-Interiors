import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { StoreContext } from "../Contexts/StoreContext";
import { Resources } from "../assets/Resources";
import FavButton from "./FavButton";
import Rating from "./Rating";

export default function Collectionproduct({ product }) {
  const { cartItems, addToCart } = useContext(StoreContext);

  const navigate = useNavigate();

  let val = 0;
  let path;

  if (product.id >= 1 && product.id <= 6) {
    path = `/chairCollection/chair${product.id}`;
  } else if (product.id >= 7 && product.id <= 12) {
    val = 6;
    path = `/loveseatCollection/loveseat${product.id - val}`;
  } else if (product.id >= 13 && product.id <= 18) {
    val = 12;
    path = `/daybedCollection/daybed${product.id - val}`;
  } else if (product.id >= 19 && product.id <= 24) {
    val = 18;
    path = `/sectionalCollection/sectional${product.id - val}`;
  } else if (product.id >= 25 && product.id <= 30) {
    val = 24;
    path = `/officeSofaCollection/officeSofa${product.id - val}`;
  } else if (product.id >= 31 && product.id <= 36) {
    val = 30;
    path = `/sleeperSofaCollection/sleeperSofa${product.id - val}`;
  }

  return (
    <div className="w-full sm:w-[45%] tablet:w-[30%] mb-10">
      <div className="w-full relative mb-4">
        <Link to={path}>
          <img
            src={product.image}
            alt="image"
            className="w-full h-full rounded-2xl"
          />
        </Link>
        <div className="w-[40px] opacity-70 hover:opacity-100 absolute top-2 right-2 bg-white rounded-full cursor-pointer">
          <FavButton />
        </div>
        <div className="w-[90px] h-[30px] absolute bottom-2 right-1 bg-white opacity-80 hover:opacity-100 rounded-xl cursor-pointer">
          <Rating />
        </div>
      </div>

      <div className="w-full flex justify-between products-start">
        <div className="w-[70%]">
          <Link to={`/sleeperSofaCollection/sleeperSofa${product.id - val}`}>
            <p className="font-bold mb-2">{product.name}</p>
          </Link>

          <p className="text-gray-500 mb-4">
            The minimal design looks great anywhere.
          </p>

          <p className="font-semibold">{`$${product.price}`}</p>
        </div>

        {cartItems[product.id] ? (
          <button
            onClick={() => navigate("/cart")}
            className="w-[25%] h-[25%] text-[12px] text-[#ffecd5] bg-[#774000] p-2 rounded-lg"
          >
            View Cart
          </button>
        ) : (
          <button
            onClick={() => {
              if (!cartItems[product.id]) addToCart(product.id);
            }}
            className="w-[40px] h-[40px] border-2 border-[#774000] rounded-lg"
          >
            <img
              src={Resources.shoppingCartIcon}
              alt="icon"
              className="mx-auto"
            />
          </button>
        )}
      </div>
    </div>
  );
}
