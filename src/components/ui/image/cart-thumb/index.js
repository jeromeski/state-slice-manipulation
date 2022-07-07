import { CartThumbWrap } from "./cart-thumb-style";

const CartThumb = ({ url, title }) => {
  return (
    <CartThumbWrap>
      <img src={url} alt={title} />
    </CartThumbWrap>
  );
};

export default CartThumb;
