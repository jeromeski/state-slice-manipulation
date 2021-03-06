import { useContext, createContext, useReducer, useMemo } from "react";
import { cartReducer, INITIAL_STATE } from "./cart.reducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const incQty = (item, qty) => {
    dispatch({
      type: "INC_QTY",
      item,
      qty
    });
  };

  const decQty = (item, qty) => {
    dispatch({
      type: "DEC_QTY",
      payload: { item, qty }
    });
  };

  const delItem = (product) => {
    dispatch({
      type: "DELETE_ITEM",
      payload: product
    });
  };

  // const addItem = (product, qty, total) => {
  //   dispatch({
  //     type: "ADD_ITEM",
  //     payload: { ...product, qty, total }
  //   });
  // };

  const values = useMemo(
    () => ({
      ...state,
      incQty,
      decQty,
      delItem
      // addItem
    }),
    [incQty, state]
  );

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
