import React from "react";
import { CgMathPlus, CgMathMinus, CgTrash } from "react-icons/cg";
import { useCart } from "../../providers/cart.context";
import Card from "./card-style";

const Counter = ({ id, incQty, decQty, delItem, qty }) => {
  return (
    <div className="action">
      <button className="increase" onClick={() => incQty({ id })}>
        <CgMathPlus />
      </button>
      <input type="text" readOnly value={qty} />
      <button className="decrease" onClick={() => decQty({ id })}>
        <CgMathMinus />
      </button>
      <button className="delete" onClick={() => delItem({ id })}>
        <CgTrash />
      </button>
    </div>
  );
};

const ProductCard = ({ product }) => {
  const { id, title, qty = 1, image } = product;
  const { incQty, decQty, delItem } = useCart();

  return (
    <Card>
      <div className="card-container">
        <div className="image-thumb">
          <img src={image} alt="product" />
        </div>
        <h5 className="title">{title}</h5>
        <Counter
          id={id}
          qty={qty}
          incQty={incQty}
          decQty={decQty}
          delItem={delItem}
        />
      </div>
    </Card>
  );
};

export default ProductCard;
