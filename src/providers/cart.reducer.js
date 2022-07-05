const INITIAL_STATE = {
  items: [
    { id: 123, name: "shirt", price: 5, qty: 1 },
    { id: 234, name: "short", price: 5, qty: 1 }
  ]
};

const cartReducer = (state, action) => {
  const cartItems = state.items;
  const product = action.payload;
  const targetItem = cartItems.filter((item) => item.id === product.id)[0];
  switch (action.type) {
    case "INC_QTY":
      return {
        ...state,
        items: [
          ...cartItems.map((item) =>
            item.id === targetItem.id
              ? {
                  ...item,
                  qty: product.qty ? item.qty + product.qty : item.qty + 1
                }
              : item
          )
        ]
      };
    case "DEC_QTY":
      return {
        ...state,
        items: [
          ...cartItems.map((item) =>
            item.id === targetItem.id
              ? {
                  ...item,
                  qty:
                    item.qty === 1
                      ? 1
                      : product.qty
                      ? item.qty - product.qty
                      : item.qty - 1
                }
              : item
          )
        ]
      };
    default:
      return state;
  }
};

export { INITIAL_STATE, cartReducer };
