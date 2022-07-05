import React from "react";
import { CgMathPlus, CgMathMinus, CgTrash } from "react-icons/cg";
import { useCart } from "../../providers/cart.context";
import Card from "./card-style";

const ProductCard = () => {
  const { state, incQty, decQty } = useCart();
  return (
    <Card>
      <div className="card-container">
        <img src="https://via.placeholder.com/50" alt="product" />
        <h5 className="title">Some variable text here</h5>
        <div className="action">
          <button className="increase" onClick={() => incQty({ id: 123 })}>
            <CgMathPlus />
          </button>
          <input type="text" readOnly value={state.items[0].qty} />
          <button className="decrease" onClick={() => decQty({ id: 123 })}>
            <CgMathMinus />
          </button>
          <button className="delete">
            <CgTrash />
          </button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
