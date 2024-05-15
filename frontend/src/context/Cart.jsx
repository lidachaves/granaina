import { createContext, useReducer, useEffect } from "react";

export const CartContext = createContext();

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { _id } = action.payload;
      const productInCartIndex = state.findIndex(
        (product) => product._id === _id
      );

      if (productInCartIndex >= 0) {
        // Si el producto ya esta en el carrito
        const newState = state.map((product) => {
          if (product._id === _id) {
            return {
              ...product,
              quantity: product.quantity + 1,
            };
          }
          return product;
        });
        return newState;
      } else {
        // Si el producto no esta en el carrito
        const newState = [
          ...state,
          {
            ...action.payload,
            quantity: 1,
          },
        ];
        return newState;
      }
    }
    case "REMOVE_ONE_ITEM_FROM_CART": {
      const { _id } = action.payload;
      const productInCartIndex = state.findIndex(
        (product) => product._id === _id
      );

      if (productInCartIndex >= 0) {
        // Si el producto ya esta en el carrito
        const newState = state.map((product) => {
          if (product._id === _id) {
            return {
              ...product,
              quantity: product.quantity - 1,
            };
          }
          return product;
        });
        return newState;
      } else {
        // Si el producto no esta en el carrito
        return state;
      }
    }
    case "REMOVE_FROM_CART": {
      const { _id } = action.payload;
      const newState = state.filter((product) => product._id !== _id);
      return newState;
    }
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, []);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const removeOneItemFromCart = (product) => {
    dispatch({ type: "REMOVE_ONE_ITEM_FROM_CART", payload: product });
  };

  const removeFromCart = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART", payload: product });
  };

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        removeOneItemFromCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
