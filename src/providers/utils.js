const addItemQuantity = (items, itemIdx, qty) => {
  if (itemIdx < 0) {
    throw new Error("Qty should not be empty");
  }
  const newItems = [...items];
  newItems[itemIdx].qty += qty;
  return newItems;
};

const getNewItemsWithTotal = () => {};
const getItemsTotalCount = () => {};
const getGrandTotal = () => {};
const generateFinalState = (state, items) => {
  // return prev state, totalUniqueItems, new items arr, grandTotal, totalItemsInCart, isEmpty,
  const uniqueItemsCount = items.length;
  return {
    ...state,
    uniqueItemsCount,
    items: getNewItemsWithTotal(items),
    itemsTotalCount: getItemsTotalCount(),
    grandTotal: getGrandTotal(),
    isEmpty: uniqueItemsCount === 0
  };
};

export {
  addItemQuantity,
  getNewItemsWithTotal,
  getItemsTotalCount,
  getGrandTotal,
  generateFinalState
};
