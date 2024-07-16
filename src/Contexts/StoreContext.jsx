import { createContext, useEffect, useState } from "react";
import { Products } from "../assets/Resources";

export const StoreContext = createContext(null);

// get items from localStorage
function getItemsLS() {
  const itemsString = localStorage.getItem("items");
  if (itemsString) return JSON.parse(itemsString);
  else return {};
}

//get selection from localStorage
function getSelection() {
  const selectionString = localStorage.getItem("selection");
  if (selectionString) return selectionString;
  else return "Home";
}

export const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getItemsLS);

  const addToCart = (ID) => {
    if (!cartItems[ID]) {
      setCartItems((curr) => ({ ...curr, [ID]: 1 }));
    } else {
      if (cartItems[ID] < 5)
        setCartItems((curr) => ({ ...curr, [ID]: curr[ID] + 1 }));
    }
  };

  //add items to localStorage
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(cartItems));
  }, [cartItems]);

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

  const [selected, setSelected] = useState(getSelection);

  //add selection to localStorage
  useEffect(() => {
    localStorage.setItem("selection", selected);
  }, [selected]);

  const contextValue = {
    Products,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    deleteFromCart,
    getCartTotal,

    selected,
    setSelected,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};
