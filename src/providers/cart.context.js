import { useContext, createContext, useReducer, useMemo } from "react";
import { cartReducer, INITIAL_STATE } from "./cart.reducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const incQty = (id) => {
    dispatch({
      type: "INC_QTY",
      payload: id
    });
  };

  const decQty = (id) => {
    dispatch({
      type: "DEC_QTY",
      payload: id
    });
  };

  const delItem = (id) => {
    dispatch({
      type: "DELETE_ITEM",
      payload: id
    });
  };

  const addItem = (product, qty, total) => {
    dispatch({
      type: "ADD_ITEM",
      payload: { ...product, qty, total }
    });
  };

  const values = useMemo(() => ({ state, incQty, decQty, delItem, addItem }), [
    state
  ]);

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
