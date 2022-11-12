import { Button, Grid, Skeleton } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState, useTransition } from "react";
import { CartState } from "../../Context/UseContext";
import Filter from "./Filter";
import Fade from "react-reveal/Fade";
import Logo from "../../Icons/Logo_SVG.svg";
import { Flip } from "react-reveal";
const Vins = () => {
  const [loading, startTransition] = useTransition();
  const [state, setState] = useState(null);
  const { show } = useState(false);

  useEffect(() => {
    startTransition(() => {
      setState(true);
    }, []);
  }, [state]);

  const {
    state: { theme, cart, products },
    dispatch,
    productFilterState: { byStock, sort },
  } = CartState();

  const transformProducts = () => {
    let sortedProducts = products.data;

    if (sort) {
      sortedProducts = sortedProducts?.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts?.filter((prod) => prod.inStock);
    }

    // if (searchQuery) {
    //   sortedProducts = sortedProducts.filter((prod) =>
    //     prod.name.toLowerCase().includes(searchQuery)
    //   );
    // }

    return sortedProducts;
  };

  return (
    <div
      id="VinsPage"
      className={theme}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        // flexWrap: "wrap",
      }}
    >
      <Filter />
      <Container
        id="productsContainer"
        style={{
          marginTop: "80px",
          marginBottom: "80px",
          display: "flex",
          flexWrap: "wrap",
          gap: "18px",
          width: "80%",
        }}
      >
        {transformProducts()?.map((i, index) => {
          return loading ? (
            <Grid
              className={`card`}
              item
              xs={2}
              sm={4}
              md={12}
              key={index}
              style={{
                border:
                  theme === "light" ? "1px #090d2a solid" : "2px #980433 solid",
                borderRadius: "1rem",
                boxSizing: "border-box",
                boxShadow:
                  theme === "light" ? "0 0 1px #090d2a" : "0 0 15px #980433",
                // backgroundColor: theme === "light" ? "rgb(52, 58, 64)" : "#001",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                gap: 5,
              }}
            >
              <img
                src={Logo}
                alt="logo"
                width={110}
                style={{
                  color:
                    theme === "light"
                      ? "rgb(195 195 195 / 54%)"
                      : "rgb(152 4 51)",
                }}
              />
              <Skeleton
                animation="pulse"
                variant="string"
                width={210}
                height={60}
                style={{
                  backgroundColor:
                    theme === "light"
                      ? "rgb(195 195 195 / 54%)"
                      : "rgb(152 4 51)",
                }}
              />
              <Skeleton
                animation="pulse"
                variant="string"
                width={210}
                height={20}
                style={{
                  backgroundColor:
                    theme === "light"
                      ? "rgb(195 195 195 / 54%)"
                      : "rgb(152 4 51)",
                }}
              />
              <Skeleton
                animation="pulse"
                variant="string"
                width={210}
                height={10}
                style={{
                  backgroundColor:
                    theme === "light"
                      ? "rgb(195 195 195 / 54%)"
                      : "rgb(152 4 51)",
                }}
              />
              <Skeleton
                animation="pulse"
                variant="text"
                width={110}
                height={60}
                style={{
                  backgroundColor:
                    theme === "light"
                      ? "rgb(195 195 195 / 54%)"
                      : "rgb(152 4 51)",
                }}
              />
            </Grid>
          ) : (
            <Fade left={true} key={index}>
              <Grid
                className={`card`}
                item
                xs={2}
                sm={4}
                md={12}
                style={{
                  border:
                    theme === "light"
                      ? "1px #090d2a solid"
                      : "2px #980433 solid",
                  boxSizing: "border-box",
                  boxShadow:
                    theme === "light" ? "0 0 1px #090d2a" : "0 0 15px #980433",
                }}
              >
                <img style={{ width: "50%" }} src={i.img} alt={i.name} />
                <h1 className={`${theme} word-break-all `}>
                  {i.name.toUpperCase()}
                </h1>
                <h3 className={theme}>{i.description}</h3>
                <h4 className={theme}>{i.price + "€"}</h4>
                {cart.some((product) => product.id === i.id) ? (
                  <Flip top collapse when={!show}>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => {
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: i,
                        });
                      }}
                    >
                      Remove From Cart
                    </Button>
                  </Flip>
                ) : (
                  <Flip top>
                    <Button
                      variant="contained"
                      color="success"
                      onClick={() => {
                        dispatch({
                          type: "ADD_TO_CART",
                          payload: i,
                        });
                      }}
                      disabled={!i.inStock}
                    >
                      {!i.inStock ? "Out of Stock" : "Add to Cart"}
                    </Button>
                  </Flip>
                )}
              </Grid>
            </Fade>
          );
        })}
      </Container>
    </div>
  );
};

export default Vins;
