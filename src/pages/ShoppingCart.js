import React from "react";
import CartTable from "components/cart-table";
import { StyledContainer, StyledRow, StyledCol } from "components/layouts";

const ShoppingCart = () => {
  return (
    <StyledContainer>
      <StyledRow>
        <StyledCol xs={12}>
          <CartTable />
        </StyledCol>
      </StyledRow>
    </StyledContainer>
  );
};
export default ShoppingCart;
