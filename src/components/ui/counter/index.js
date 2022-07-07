import { CgMathPlus, CgMathMinus } from "react-icons/cg";
import { CounterWrap } from "./counter-style";
import CartButton from "components/ui/buttons/cart-button";
import { useCallback, useEffect, useRef, useState } from "react";

const Counter = ({ incQty, decQty, product, qty }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
    incQty(product, count);
  }, []);

  const handleDecrement = useCallback(() => {
    setCount((prev) => prev - 1);
    decQty(product, count);
  }, []);

  return (
    <CounterWrap>
      <div className="counter-elements">
        <CartButton icon={<CgMathPlus />} onClick={handleIncrement} mr={2} />
        <input type="text" readOnly value={qty} />
        <CartButton icon={<CgMathMinus />} onClick={handleDecrement} ml={2} />
      </div>
    </CounterWrap>
  );
};

export default Counter;
