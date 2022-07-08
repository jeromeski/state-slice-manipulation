import {
  removeItemQuantity,
  addItemQuantity,
  getNewItemsWithTotals,
  getItemsAggregateCount,
  getGrandTotal
} from "./utils";

const INITIAL_STATE = {
  items: [
    {
      id: 57,
      title: "Magnetic Designs Women Printed Fit And Flare Dress",
      slug: "magnetic-designs-women-printed-fit-and-flare-dress",
      unit: "1 pc(s)",
      price: 35,
      qty: 1,
      itemTotal: 35,
      salePrice: 0,
      description:
        "Mauve printed knitted fit and flare dress, has a round neck, three-quarter sleeves, concealed zip closure,, flared hem",
      discountInPercent: 0,
      type: "CLOTHING",
      image: "https://s3.amazonaws.com/redqteam.com/pickbazar/magnetic.jpg",
      author: null,
      gallery: [
        {
          url: "https://s3.amazonaws.com/redqteam.com/pickbazar/magnetic.jpg",
          __typename: "Gallery"
        },
        {
          url: "https://s3.amazonaws.com/redqteam.com/pickbazar/magnetic.jpg",
          __typename: "Gallery"
        },
        {
          url: "https://s3.amazonaws.com/redqteam.com/pickbazar/magnetic.jpg",
          __typename: "Gallery"
        },
        {
          url: "https://s3.amazonaws.com/redqteam.com/pickbazar/magnetic.jpg",
          __typename: "Gallery"
        }
      ],
      categories: [
        {
          id: 19,
          title: "Women Dress",
          slug: "women-dress",
          __typename: "Category"
        },
        {
          id: 20,
          title: "Printed",
          slug: "printed",
          __typename: "Category"
        }
      ]
    },
    {
      id: 58,
      title: "Mango Self Striped A Line Dress",
      slug: "mango-self-striped-a-line-dress",
      unit: "1 pc(s)",
      price: 85,
      qty: 1,
      itemTotal: 85,
      salePrice: 68,
      description:
        "Off-White self-striped knitted midi A-line dress, has a scoop neck, sleeveless, straight hem",
      discountInPercent: 20,
      type: "CLOTHING",
      image: "https://s3.amazonaws.com/redqteam.com/pickbazar/mango.jpg",
      author: null,
      gallery: [
        {
          url: "https://s3.amazonaws.com/redqteam.com/pickbazar/mango.jpg",
          __typename: "Gallery"
        },
        {
          url: "https://s3.amazonaws.com/redqteam.com/pickbazar/mango.jpg",
          __typename: "Gallery"
        },
        {
          url: "https://s3.amazonaws.com/redqteam.com/pickbazar/mango.jpg",
          __typename: "Gallery"
        },
        {
          url: "https://s3.amazonaws.com/redqteam.com/pickbazar/mango.jpg",
          __typename: "Gallery"
        }
      ],
      categories: [
        {
          id: 19,
          title: "Women Dress",
          slug: "women-dress",
          __typename: "Category"
        },
        {
          id: 22,
          title: "Single Color",
          slug: "single-color",
          __typename: "Category"
        }
      ]
    },
    {
      id: 59,
      title: "Forever 21 Solid Bodycon Midi Dress",
      slug: " forever-21-solid-bodycon-midi-dress",
      unit: "1 pc(s)",
      price: 185,
      qty: 1,
      itemTotal: 185,
      salePrice: 0,
      description:
        "Grey solid woven bodycon dress, has a round neck, sleeveless, straight hem",
      discountInPercent: 0,
      type: "CLOTHING",
      image: "https://s3.amazonaws.com/redqteam.com/pickbazar/FOREVER_21.jpg",
      author: null,
      gallery: [
        {
          url: "https://s3.amazonaws.com/redqteam.com/pickbazar/FOREVER_21.jpg",
          __typename: "Gallery"
        },
        {
          url: "https://s3.amazonaws.com/redqteam.com/pickbazar/FOREVER_21.jpg",
          __typename: "Gallery"
        },
        {
          url: "https://s3.amazonaws.com/redqteam.com/pickbazar/FOREVER_21.jpg",
          __typename: "Gallery"
        },
        {
          url: "https://s3.amazonaws.com/redqteam.com/pickbazar/FOREVER_21.jpg",
          __typename: "Gallery"
        }
      ],
      categories: [
        {
          id: 19,
          title: "Women Dress",
          slug: "women-dress",
          __typename: "Category"
        },
        {
          id: 21,
          title: "Floral",
          slug: "floral",
          __typename: "Category"
        }
      ]
    }
  ],
  itemsTotalCount: 3,
  uniqueItemsCount: 3,
  grandTotal: 385,
  isEmpty: false
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "INC_QTY": {
      const items = addItemQuantity(state.items, action.item, action.qty);
      return {
        ...state,
        items: getNewItemsWithTotals(items),
        itemsTotalCount: getItemsAggregateCount(items),
        uniqueItemsCount: items?.length,
        grandTotal: items?.reduce(
          (totalCount, currentItem) => (totalCount + currentItem.qty, 0)
        )
      };
    }
    case "DEC_QTY": {
      const items = removeItemQuantity(
        state.items,
        action.payload.item,
        action.payload.qty
      );
      return generateFinalState(state, items);
    }
    case "DELETE_ITEM":
      break;
    case "ADD_ITEM":
      break;
    default:
      return state;
  }
};

const generateFinalState = (state, items) => {
  // return prev state, totalUniqueItems, new items arr, grandTotal, totalItemsInCart, isEmpty,
  const uniqueItemsCount = items.length;
  return {
    ...state,
    items: getNewItemsWithTotals(items),
    itemsTotalCount: getItemsAggregateCount(items),
    uniqueItemsCount,
    grandTotal: items.reduce(
      (totalCount, currentItem) => (totalCount + currentItem.qty, 0)
    ),
    isEmpty: uniqueItemsCount === 0
  };
};

export { INITIAL_STATE, cartReducer };

/*
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
                  qty: item.qty + 1
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
                  qty: item.qty === 1 ? 1 : item.qty - 1
                }
              : item
          )
        ]
      };
    case "DELETE_ITEM":
      return {
        ...state,
        items: [...cartItems.filter((item) => item.id !== targetItem.id)]
      };

    case "ADD_ITEM":
      const isInCart = Object.values(cartItems[0]).includes(product.id);
      return isInCart
        ? { ...state }
        : {
            ...state,
            items: [...cartItems.push(product)]
          };

    default:
      return state;
  }
};

*/
