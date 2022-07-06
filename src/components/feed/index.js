import React from "react";
import { useCart } from "../../providers/cart.context";
import ProductCard from "../card";
import Feed from "./feed-style";

const ProductFeed = () => {
  const { state } = useCart();
  return (
    <Feed>
      {state &&
        state?.items?.map((item) => <ProductCard key={item.id} {...item} />)}
    </Feed>
  );
};

export default ProductFeed;
