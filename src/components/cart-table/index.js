import { CartTableWrap } from "./cart-table-style";

const CartTable = () => {
  return (
    <CartTableWrap>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </CartTableWrap>
  );
};

export default CartTable;
