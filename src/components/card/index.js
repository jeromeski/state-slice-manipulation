import React from "react";
import { CgMathPlus, CgMathMinus, CgTrash } from "react-icons/cg";
import { useCart } from "../../providers/cart.context";
import Card from "./card-style";

const ProductCard = ({ id, name, qty }) => {
  const { incQty, decQty } = useCart();

  return (
    <Card>
      <div className="card-container">
        <img src="https://via.placeholder.com/50" alt="product" />
        <h5 className="title">{name}</h5>
        <div className="action">
          <button className="increase" onClick={() => incQty({ id })}>
            <CgMathPlus />
          </button>
          <input type="text" readOnly value={qty} />
          <button className="decrease" onClick={() => decQty({ id })}>
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
