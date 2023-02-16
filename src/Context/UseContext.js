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

  const localTimeZone = () => {
    var autoTheme = localStorage.getItem("autoTheme");
    autoTheme === null
      ? localStorage.setItem("autoTheme", false)
      : JSON.parse(autoTheme);
    return autoTheme ? JSON.parse(autoTheme) : false;
  };
  const localTheme = () => {
    var localTheme = localStorage.getItem("mode");
    localTheme === null
      ? localStorage.setItem("mode", JSON.stringify("light"))
      : JSON.parse(localTheme);

    return localTheme ? JSON.parse(localTheme) : "light";
  };
  // console.log(localTheme());
  const autoThemeFunction = () => {
    const hours = new Date().getHours();
    const l = localStorage.removeItem("mode");
    var localTheme = localStorage.getItem("mode");
    if (hours >= 6) {
      return l === null || localTheme === "dark"
        ? localStorage.setItem("mode", JSON.stringify("light"))
        : null;
    }
    // if (hours >= 20) {
    //   const dark = localStorage.setItem("mode", JSON.stringify("dark"));
    //   return dark;
    // }
    // if (hours >= 0) {
    //   const dark = localStorage.setItem("mode", JSON.stringify("dark"));
    //   return dark;
    // }
  };
  // console.log(autoThemeFunction());

  const [state, dispatch] = useReducer(CartReducer, {
    cart: localData(),
    theme: localTimeZone() === true ? autoThemeFunction() : localTheme(),
    autoTheme: localTimeZone(),
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
    localStorage.setItem("autoTheme", state.autoTheme);
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
