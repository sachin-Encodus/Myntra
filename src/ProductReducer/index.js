import { data } from "../constant/data";

export const initialState = {
  product: [...data],
  cartitem: [],
  wishlist: [],
  filterData: {
    gender: null,
    brand: [
      { name: "Roadster", checked: false },
      { name: "HIGHLANDER", checked: false },
      { name: "SASSAFRAS", checked: false },
    ],
    pricerange: false,
  },
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "product":
      return {
        ...state,
        product: [...action.payload],
      };
    case "wishlist":
      return {
        ...state,
        wishlist: action.payload,
      };
    case "filterData":
      return {
        ...state,
        filterData: { ...state.filterData, ...action.payload },
      };
    case "cartitem":
      return {
        ...state,
        cartitem: action.payload,
      };

    default:
      return state;
  }
};
