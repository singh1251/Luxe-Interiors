import { useContext, useState } from "react";

import { StoreContext } from "../../Contexts/StoreContext";
import { Products, Resources } from "../../assets/Resources";
import Breadcrumbs from "../../Components/Breadcrumbs";

export default function Cart({ setShowLogin }) {
  const { cartItems, removeFromCart, addToCart, deleteFromCart, getCartTotal } =
    useContext(StoreContext);

  const [coupon, setCoupon] = useState("");

  const handleCoupon = (evt) => {
    setApplyCoupon(false);
    setCoupon(evt.target.value.toUpperCase());
  };

  const [applyCoupon, setApplyCoupon] = useState(false);

  const val = applyCoupon ? (coupon === "FIRSTORDER100" ? -50 : 50) : 50;

  const links = [
    { label: "Home", path: "/" },
    { label: "Cart", path: "/cart" },
  ];

  if (!Object.keys(cartItems).length) {
    return (
      <>
        <Breadcrumbs links={links} />
        <section className="w-full flex flex-wrap justify-center my-14">
          <section className="w-[90%] h-[400px] mb-40">
            <p className="mb-10 text-3xl font-bold">Shopping Cart</p>
            <div className="bg-gray-200 h-px flex-1 sm:self-stretch mb-20"></div>

            <p className="text-gray-500 text-2xl text-center">Cart Is Empty</p>
          </section>
        </section>
      </>
    );
  }

  return (
    <>
      <Breadcrumbs links={links} />
      <section className="flex flex-wrap justify-center">
        <section className="w-[90%] flex flex-wrap justify-between tablet:flex-nowrap my-14">
          <section className="w-full tablet:w-[60%] mb-40">
            <p className="mb-14 text-3xl font-bold">Shopping Cart</p>

            <div className="h-full border border-gray-200 rounded-2xl pl-3 py-2">
              <table className="w-full table-fixed">
                <thead className="text-gray-500">
                  <tr className="text-sm sm:text-lg tablet:text-xl">
                    <th className="py-4">Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody className="text-center">
                  {Products.map((product, index) => {
                    if (cartItems[product.id]) {
                      return (
                        <tr key={index}>
                          <td className="py-4">
                            <img
                              src={product.image}
                              alt="image"
                              className="mx-auto w-[80%]"
                            />
                            <p className="text-xs tablet:text-sm">
                              {product.name}
                            </p>
                          </td>

                          <td>
                            <div className="w-[80%] mx-auto relative">
                              <p className="w-full text-xs tablet:text-sm text-center py-2 bg-gray-100 rounded-full">
                                {cartItems[product.id]}
                              </p>

                              <img
                                src={Resources.plusIcon}
                                alt="icon"
                                onClick={() => addToCart(product.id)}
                                className="absolute right-1 top-2 sm:right-2 cursor-pointer w-[15px] tablet:w-[20px]"
                              />
                              <img
                                src={Resources.minusIcon}
                                alt="icon"
                                onClick={() => removeFromCart(product.id)}
                                className="absolute left-1 top-2 sm:left-2 cursor-pointer w-[15px] tablet:w-[20px]"
                              />
                            </div>
                          </td>

                          <td className="text-xs tablet:text-sm">
                            ${product.price}
                          </td>
                          <td className="text-xs sm:text-sm">
                            ${cartItems[product.id] * product.price}
                          </td>
                          <td>
                            <img
                              src={Resources.removeIcon}
                              alt="icon"
                              onClick={() => deleteFromCart(product.id)}
                              className="cursor-pointer mx-auto w-[18px] sm:w-[25px]"
                            />
                          </td>
                        </tr>
                      );
                    }
                  })}
                </tbody>
              </table>
            </div>
          </section>

          <section className="w-full h-[480px] tablet:w-[35%] tablet:mt-[92px] border border-gray-200 rounded-2xl px-3 py-4">
            <div className="w-full mb-10">
              <p className="text-xl font-bold text-gray-500 mb-5">
                Coupon Code
              </p>
              <form
                action="#"
                onSubmit={(evt) => {
                  evt.preventDefault();
                  setApplyCoupon(true);
                }}
                className="flex justify-between"
              >
                <input
                  onChange={handleCoupon}
                  value={coupon}
                  type="text"
                  placeholder="Enter Coupon Code"
                  required
                  className="w-[72%] px-4 py-2 rounded-full text-gray-500 bg-gray-100 focus:outline-none"
                />
                <button
                  className={`w-[25%] bg-[#774000] text-[#ffecd5] py-2 rounded-full ${
                    !applyCoupon && "hover:scale-[1.05]"
                  }`}
                >
                  Apply
                </button>
              </form>
            </div>

            <div className="w-full">
              <p className="text-xl font-bold text-gray-500 mb-5">Cart Value</p>

              <div className="bg-gray-200 h-px flex-1 sm:self-stretch mb-5"></div>

              <div className="flex justify-between mb-2">
                <p className="text-gray-500">Sub Total</p>
                <p>${getCartTotal()}</p>
              </div>

              {applyCoupon &&
                (coupon === "FIRSTORDER100" ? (
                  <div className="flex justify-between mb-2">
                    <p className="text-gray-500">Coupon</p> <p>- $100</p>
                  </div>
                ) : (
                  <div className="flex justify-between mb-2">
                    <p className="text-gray-500">Coupon</p> <p>Not avaliable</p>
                  </div>
                ))}

              <div className="flex justify-between mb-5">
                <p className="text-gray-500">Shipping</p> <p>+ $50</p>
              </div>

              <div className="bg-gray-200 h-px flex-1 sm:self-stretch mb-5"></div>

              <div className="flex justify-between mb-10">
                <p>Total</p> <p>${getCartTotal() + val}</p>
              </div>

              <button
                onClick={() => setShowLogin(true)}
                className="bg-[#774000] text-[#ffecd5] w-full py-2 rounded-full"
              >
                Checkout
              </button>
            </div>
          </section>
        </section>
      </section>
    </>
  );
}
