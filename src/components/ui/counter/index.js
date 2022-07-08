import { CgMathPlus, CgMathMinus } from "react-icons/cg";
import { CounterWrap } from "./counter-style";
import CartButton from "components/ui/buttons/cart-button";
import { useState } from "react";

const Counter = ({ incQty, decQty, product }) => {
  const handleIncrement = () => {
    incQty(product, product.qty + 1);
  };

  const handleDecrement = () => {
    decQty(product, product.qty - 1);
  };

  return (
    <CounterWrap>
      <div className="counter-elements">
        <CartButton icon={<CgMathPlus />} onClick={handleIncrement} mr={2} />
        <input type="text" readOnly value={product.qty} />
        <CartButton icon={<CgMathMinus />} onClick={handleDecrement} ml={2} />
      </div>
    </CounterWrap>
  );
};

export default Counter;
