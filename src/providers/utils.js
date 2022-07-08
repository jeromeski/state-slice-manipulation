const addItemQuantity = (items, item, qty) => {
  if (qty < 0) {
    throw new Error("Qty should not be empty");
  }
  const itemIdx = items.findIndex((c) => c.id === item.id);
  const newItems = [...items];
  newItems[itemIdx].qty += 1;
  return newItems;
};

const getNewItemsWithTotals = (items) => {
  return items.map((item) => ({
    ...item,
    itemTotal: item.price * item.qty
  }));
};

const removeItemQuantity = (items, item, qty) => {
  if (qty < 0) {
    throw new Error("Qty should not be empty");
  }
  const itemIdx = items.findIndex((c) => c.id === item.id);
  const newItems = [...items];
  newItems[itemIdx].qty -= 1;
  return newItems;
};

const getItemsAggregateCount = (items) => {
  return items.reduce(
    (totalCount, currentItem) => (totalCount + currentItem.qty, 0)
  );
};
const getGrandTotal = (items) => {
  const total = items.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
  return total;
};

export {
  addItemQuantity,
  removeItemQuantity,
  getNewItemsWithTotals,
  getItemsAggregateCount,
  getGrandTotal
};
