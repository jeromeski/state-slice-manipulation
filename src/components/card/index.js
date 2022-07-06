import React from "react";
import { CgMathPlus, CgMathMinus, CgTrash } from "react-icons/cg";
import { useCart } from "../../providers/cart.context";
import Card from "./card-style";

const ProductCard = ({ id, title, qty = 1, image }) => {
  const { incQty, decQty } = useCart();

  return (
    <Card>
      <div className="card-container">
        <div className="image-thumb">
          <img src={image} alt="product" />
        </div>
        <h5 className="title">{title}</h5>
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
