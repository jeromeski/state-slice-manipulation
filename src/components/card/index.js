import React from "react";
import { CgTrash } from "react-icons/cg";
import { useCart } from "../../providers/cart.context";
import Counter from "../ui/counter";
import CartThumb from "../ui/image/cart-thumb";
import Card from "./card-style";

const ProductCard = ({ product }) => {
  const { id, title, qty = 1, image } = product;
  const { incQty, decQty, delItem } = useCart();

  return (
    <Card>
      <div className="card-container">
        <button
          type="button"
          className="delete"
          onClick={() => delItem({ id })}
        >
          <CgTrash />
        </button>
        <CartThumb url={image} alt={title} />
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
