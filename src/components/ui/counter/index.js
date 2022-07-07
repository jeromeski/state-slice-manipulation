import { CgMathPlus, CgMathMinus } from "react-icons/cg";
import { CounterWrap } from "./counter-style";
import CartButton from "components/ui/buttons/cart-button";

const Counter = ({ incQty, decQty, product }) => {
  const { qty } = product;
  return (
    <CounterWrap>
      <div className="counter-elements">
        <CartButton
          icon={<CgMathPlus />}
          onClick={() => incQty(product)}
          mr={2}
        />
        <input type="text" readOnly value={qty} />
        <CartButton
          icon={<CgMathMinus />}
          onClick={() => decQty(product)}
          ml={2}
        />
      </div>
    </CounterWrap>
  );
};

export default Counter;
