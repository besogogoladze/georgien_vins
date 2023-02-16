const initialState = [];
const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };
    }
    case "REMOVE_FROM_CART": {
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    }
    case "CLEAR_CART": {
      return {
        ...state,
        cart: initialState,
      };
    }
    case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    case "TOGGLE_THEME":
      const newTheme = state.theme === "light" ? "dark" : "light";
      return { ...state, theme: newTheme };
    case "TOGGLE_AUTOTHEME":
      const newAutoTheme = state.autoTheme === false ? true : false;
      return { ...state, autoTheme: newAutoTheme };
    default:
      return state;
  }
};
export const productFilterReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return { ...state, sort: action.payload };
    case "FILTER_BY_STOCK":
      return { ...state, byStock: !state.byStock };
    case "FILTER_BY_CATEGORY":
      return {
        ...state,
        byCategory: action.payload,
      };
    case "FILTER_BY_SEARCH":
      return { ...state, searchQuery: !action.payload };
    case "CLEAR_FILTERS":
      return {
        ...state,
        sort: "false",
        byStock: false,
      };
    case "CLEAR_CATEGORY":
      return {
        ...state,
        byCategory: false,
      };
    default:
      return state;
  }
};

export default CartReducer;
