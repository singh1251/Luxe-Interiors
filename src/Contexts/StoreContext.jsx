import { createContext, useEffect, useState } from "react";
import { Products } from "../assets/Resources";

export const StoreContext = createContext(null);

export const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (ID) => {
    if (!cartItems[ID]) {
      setCartItems((curr) => ({ ...curr, [ID]: 1 }));
    } else {
      if (cartItems[ID] < 5)
        setCartItems((curr) => ({ ...curr, [ID]: curr[ID] + 1 }));
    }
  };

  const removeFromCart = (ID) => {
    if (cartItems[ID] > 1)
      setCartItems((curr) => ({ ...curr, [ID]: curr[ID] - 1 }));
    if (cartItems[ID] === 1) {
      setCartItems((curr) => {
        delete curr[ID];
        return { ...curr };
      });
    }
  };

  const deleteFromCart = (ID) => {
    setCartItems((curr) => {
      delete curr[ID];
      return { ...curr };
    });
  };

  const getCartTotal = () => {
    const prIDs = Object.keys(cartItems);
    let cartTotalAmmount = 0;
    for (let ID of prIDs) {
      const product = Products.find((p) => p.id === parseInt(ID));
      cartTotalAmmount += product.price * cartItems[ID];
    }

    return cartTotalAmmount;
  };

  const contextValue = {
    Products,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    deleteFromCart,
    getCartTotal,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};
