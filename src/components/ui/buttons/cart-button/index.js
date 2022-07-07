import { StyledCartButton } from "./cart-button-style";

const CartButton = ({ icon, handler, ...props }) => {
  return (
    <StyledCartButton type="button" {...props}>
      {icon}
    </StyledCartButton>
  );
};

export default CartButton;
