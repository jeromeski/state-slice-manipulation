import React from "react";
import { useCart } from "../../providers/cart.context";
import Counter from "../ui/counter";
import CartThumb from "../ui/image/cart-thumb";
import Card from "./card-style";
import CartButton from "components/ui/buttons/cart-button";
import { CgTrash } from "react-icons/cg";

const ProductCard = ({ product }) => {
  const { id, title, image } = product;
  const { incQty, decQty, delItem } = useCart();
  return (
    <Card>
      <div className="card-container">
        <CartButton
          icon={<CgTrash />}
          id={id}
          onClick={() => delItem(product)}
          mr={2}
        />
        <CartThumb url={image} alt={title} />
        <h5 className="title">{title}</h5>
        <Counter incQty={incQty} decQty={decQty} product={product} />
      </div>
    </Card>
  );
};

export default ProductCard;
