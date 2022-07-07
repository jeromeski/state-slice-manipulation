import { useCart } from "providers/cart.context";
import { CartTableWrap } from "./cart-table-style";
import CardThumb from "components/ui/image/cart-thumb";
import Counter from "components/ui/counter";
import CartButton from "components/ui/buttons/cart-button";
import { CgTrash } from "react-icons/cg";
import { useEffect, useState } from "react";

const CartTable = () => {
  const { state, incQty, decQty, delItem } = useCart();

  return (
    <CartTableWrap>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {state?.items?.map((item) => {
            return (
              <tr key={item.id}>
                <td className="cart-image-col">
                  <CartButton
                    icon={<CgTrash />}
                    id={item.id}
                    onClick={() => delItem(item)}
                    mr={2}
                  />
                  <CardThumb url={item.image} />
                </td>
                <td>
                  <h5>{item.title}</h5>
                </td>
                <td>
                  <Counter product={item} incQty={incQty} decQty={decQty} />
                </td>
                <td className="cart-item-price">
                  <p>{item.price}</p>
                </td>
                <td className="cart-item-total">
                  <p>${item.price * item.qty}.00</p>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr className="cart-footer">
            <td></td>
            <td></td>
            <td></td>
            <td>
              <h4>Grand Total</h4>
            </td>
            <td>
              <h4>$0.00</h4>
            </td>
          </tr>
        </tfoot>
      </table>
    </CartTableWrap>
  );
};

export default CartTable;
