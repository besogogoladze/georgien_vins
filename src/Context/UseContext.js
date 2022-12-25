import React, { createContext, useContext, useEffect, useReducer } from "react";
import CartReducer, { productFilterReducer } from "./Reducer";

const Cart = createContext();
const ThemeContext = createContext();

function Context({ children }) {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const Data = async () => {
  //     const data = await axios.get(
  //       "https://us-central1-vinsgeorgiens-a471b.cloudfunctions.net/vinsGeorgien",
  //       { headers: { "Access-Control-Allow-Origin": "*" } }
  //     );
  //     setProducts(data.data.Products.data);
  //   };
  //   Data();
  // }, []);
  const localData = () => {
    const localData = localStorage.getItem("cart");
    return localData ? JSON.parse(localData) : [];
  };
  const localTheme = () => {
    var localTheme = localStorage.getItem("mode");
    localTheme === null
      ? localStorage.setItem("mode", JSON.stringify("light"))
      : JSON.parse(localTheme);

    return localTheme ? JSON.parse(localTheme) : "light";
  };

  const [state, dispatch] = useReducer(CartReducer, {
    cart: localData(),
    theme: localTheme(),
  });

  const [productFilterState, productFilterDispatch] = useReducer(
    productFilterReducer,
    {
      sort: false,
      byStock: false,
    }
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
    localStorage.setItem("mode", JSON.stringify(state.theme));
  }, [state]);

  return (
    <Cart.Provider
      value={{ state, dispatch, productFilterState, productFilterDispatch }}
    >
      {children}
    </Cart.Provider>
  );
}

export default Context;

export const CartState = () => {
  return useContext(Cart, ThemeContext);
};
