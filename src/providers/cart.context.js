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

  const values = useMemo(() => ({ state, incQty, decQty }), [state]);

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
