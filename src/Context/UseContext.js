import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import CartReducer, { productFilterReducer } from "./Reducer";

const Cart = createContext();
const ThemeContext = createContext();

const Products = {
  data: [
    {
      id: 1,
      name: "saferavi",
      img: "https://i.postimg.cc/J7dfCcqQ/vin-Georgien.png",
      description:
        "750 Ml. Saferavi, Red Dry Wine, Alcohol 12%, Qvevris, Twins Wine Cellar",
      price: 100.0,
      inStock: 0,
    },
    {
      id: 2,
      name: "skhelauri",
      img: "https://i.postimg.cc/J7dfCcqQ/vin-Georgien.png",
      description:
        "750 Ml. Saferavi, Red Dry Wine, Alcohol 12%, Qvevris, Twins Wine Cellar",
      price: 77.5,
      inStock: 3,
    },
    {
      id: 3,
      name: "mwvane",
      img: "https://i.postimg.cc/J7dfCcqQ/vin-Georgien.png",
      description:
        "750 Ml. Saferavi, Red Dry Wine, Alcohol 12%, Qvevris, Twins Wine Cellar",
      price: 14.4,
      inStock: 1,
    },
    {
      id: 4,
      name: "rachuli",
      img: "https://i.postimg.cc/J7dfCcqQ/vin-Georgien.png",
      description:
        "750 Ml. Saferavi, Red Dry Wine, Alcohol 12%, Qvevris, Twins Wine Cellar",
      price: 7.99,
      inStock: 10,
    },
    {
      id: 5,
      name: "kakhuri",
      img: "https://i.postimg.cc/J7dfCcqQ/vin-Georgien.png",
      description:
        "750 Ml. Saferavi, Red Dry Wine, Alcohol 12%, Qvevris, Twins Wine Cellar",
      price: 23.0,
      inStock: 7,
    },
    {
      id: 6,
      name: "khvanchkara",
      img: "https://i.postimg.cc/J7dfCcqQ/vin-Georgien.png",
      description:
        "750 Ml. Saferavi, Red Dry Wine, Alcohol 12%, Qvevris, Twins Wine Cellar",
      price: 23.0,
      inStock: 2,
    },
    {
      id: 7,
      name: "saferavi",
      img: "https://i.postimg.cc/J7dfCcqQ/vin-Georgien.png",
      description:
        "750 Ml. Saferavi, Red Dry Wine, Alcohol 12%, Qvevris, Twins Wine Cellar",
      price: 100.0,
      inStock: 0,
    },
    {
      id: 8,
      name: "skhelauri",
      img: "https://i.postimg.cc/J7dfCcqQ/vin-Georgien.png",
      description:
        "750 Ml. Saferavi, Red Dry Wine, Alcohol 12%, Qvevris, Twins Wine Cellar",
      price: 77.5,
      inStock: 3,
    },
    {
      id: 9,
      name: "mwvane",
      img: "https://i.postimg.cc/J7dfCcqQ/vin-Georgien.png",
      description:
        "750 Ml. Saferavi, Red Dry Wine, Alcohol 12%, Qvevris, Twins Wine Cellar",
      price: 14.4,
      inStock: 1,
    },
    {
      id: 10,
      name: "rachuli",
      img: "https://i.postimg.cc/J7dfCcqQ/vin-Georgien.png",
      description:
        "750 Ml. Saferavi, Red Dry Wine, Alcohol 12%, Qvevris, Twins Wine Cellar",
      price: 7.99,
      inStock: 10,
    },
    {
      id: 11,
      name: "kakhuri",
      img: "https://i.postimg.cc/J7dfCcqQ/vin-Georgien.png",
      description:
        "750 Ml. Saferavi, Red Dry Wine, Alcohol 12%, Qvevris, Twins Wine Cellar",
      price: 23.0,
      inStock: 7,
    },
    {
      id: 12,
      name: "khvanchkara",
      img: "https://i.postimg.cc/J7dfCcqQ/vin-Georgien.png",
      description:
        "750 Ml. Saferavi, Red Dry Wine, Alcohol 12%, Qvevris, Twins Wine Cellar",
      price: 23.0,
      inStock: 2,
    },
    {
      id: 13,
      name: "saferavi",
      img: "https://i.postimg.cc/J7dfCcqQ/vin-Georgien.png",
      description:
        "750 Ml. Saferavi, Red Dry Wine, Alcohol 12%, Qvevris, Twins Wine Cellar",
      price: 100.0,
      inStock: 0,
    },
    {
      id: 14,
      name: "skhelauri",
      img: "https://i.postimg.cc/J7dfCcqQ/vin-Georgien.png",
      description:
        "750 Ml. Saferavi, Red Dry Wine, Alcohol 12%, Qvevris, Twins Wine Cellar",
      price: 77.5,
      inStock: 3,
    },
    {
      id: 15,
      name: "mwvane",
      img: "https://i.postimg.cc/J7dfCcqQ/vin-Georgien.png",
      description:
        "750 Ml. Saferavi, Red Dry Wine, Alcohol 12%, Qvevris, Twins Wine Cellar",
      price: 14.4,
      inStock: 1,
    },
    {
      id: 16,
      name: "rachuli",
      img: "https://i.postimg.cc/J7dfCcqQ/vin-Georgien.png",
      description:
        "750 Ml. Saferavi, Red Dry Wine, Alcohol 12%, Qvevris, Twins Wine Cellar",
      price: 7.99,
      inStock: 10,
    },
    {
      id: 17,
      name: "kakhuri",
      img: "https://i.postimg.cc/J7dfCcqQ/vin-Georgien.png",
      description:
        "750 Ml. Saferavi, Red Dry Wine, Alcohol 12%, Qvevris, Twins Wine Cellar",
      price: 23.0,
      inStock: 7,
    },
    {
      id: 18,
      name: "khvanchkara",
      img: "https://i.postimg.cc/J7dfCcqQ/vin-Georgien.png",
      description:
        "750 Ml. Saferavi, Red Dry Wine, Alcohol 12%, Qvevris, Twins Wine Cellar",
      price: 23.0,
      inStock: 2,
    },
    {
      id: 19,
      name: "kakhuri",
      img: "https://i.postimg.cc/J7dfCcqQ/vin-Georgien.png",
      description:
        "750 Ml. Saferavi, Red Dry Wine, Alcohol 12%, Qvevris, Twins Wine Cellar",
      price: 23.0,
      inStock: 7,
    },
    {
      id: 20,
      name: "khvanchkara",
      img: "https://i.postimg.cc/J7dfCcqQ/vin-Georgien.png",
      description:
        "750 Ml. Saferavi, Red Dry Wine, Alcohol 12%, Qvevris, Twins Wine Cellar",
      price: 23.0,
      inStock: 2,
    },
  ],
};
// function Data() {
//   const [productsData, setProductsData] = React.useState();
//   const Data = () => {
//     axios.get("https://besogogoladze.github.io/vinsGeorgiensApi/index.js")
//       .then((res) => setProductsData(res.data.data))
//       .catch((error) => console.log(error));
//   };

//   useEffect(() => {
//     Data();
//     console.log(productsData);
//   }, [productsData]);
//   return productsData
// }

function Context({ children }) {
  // const [productsData, setProductsData] = React.useState();
  // React.useMemo(() => {
  //   const getProductsData = async () => {
  //     const data = await axios
  //       .get("https://besogogoladze.github.io/vinsGeorgiensApi/index.js")
  //       .then((res) =>
  //         console.log(
  //           res.data.data === undefined
  //             ? axios
  //                 .get(
  //                   "https://besogogoladze.github.io/vinsGeorgiensApi/index.js"
  //                 )
  //                 .then((res) => console.log(res.data.data))
  //             : res.data.data
  //         )
  //       )
  //       .catch((error) => console.log(error));
  //     return setProductsData(data);
  //   };
  //   getProductsData();
  //   console.log(productsData);
  // }, []);
  // console.log(productsData);
  localStorage.setItem("mode", JSON.stringify("light"));

  const localData = () => {
    const localData = localStorage.getItem("cart");
    return localData ? JSON.parse(localData) : [];
  };
  const localTheme = () => {
    var localTheme = localStorage.getItem("mode");
    return localTheme ? JSON.parse(localTheme) : "light";
  };

  const [state, dispatch] = useReducer(CartReducer, {
    products: Products,
    cart: localData(),
    theme: localTheme(),
  });

  const [productFilterState, productFilterDispatch] = useReducer(
    productFilterReducer,
    {
      byStock: false,
      searchQuery: "",
    }
  );

  // useMemo(() => {
  //   getProductsData();
  // }, []);

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
