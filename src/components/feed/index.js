import React from "react";
import { useCart } from "../../providers/cart.context";
import ProductCard from "../card";
import Feed from "./feed-style";

const ProductFeed = () => {
  const { state } = useCart();
  return (
    <Feed>
      {state &&
        state?.items
          ?.slice(0, 8)
          .map((item) => <ProductCard key={item.id} product={item} />)}
    </Feed>
  );
};

export default ProductFeed;
