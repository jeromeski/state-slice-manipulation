import { CgMathPlus, CgMathMinus } from "react-icons/cg";
import { CounterWrap } from "./counter-style";

const Counter = ({ id, incQty, decQty, delItem, qty }) => {
  return (
    <CounterWrap>
      <div className="counter-elements">
        <button className="increase" onClick={() => incQty({ id })}>
          <CgMathPlus />
        </button>
        <input type="text" readOnly value={qty} />
        <button className="decrease" onClick={() => decQty({ id })}>
          <CgMathMinus />
        </button>
      </div>
    </CounterWrap>
  );
};

export default Counter;
