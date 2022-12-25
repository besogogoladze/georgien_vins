import { Button, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { CartState } from "../../Context/UseContext";
import Filter from "./Filter";
import Fade from "react-awesome-reveal";
import { Flip } from "react-awesome-reveal";
import "../home.css";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useQuery } from "react-query";
const Vins = () => {
  const { show } = useState(false);

  const {
    state: { theme, cart },
    dispatch,
    productFilterState: { byStock, sort },
  } = CartState();

  const Data = async () => {
    const data = await axios.get(process.env.REACT_APP_PRODUCTS_API, {
      headers: { "Access-Control-Allow-Origin": "*" },
    });
    return data;
  };

  const { isLoading, data, isError, error } = useQuery("products", Data, {
    cacheTime: 5000,
    refetchOnReconnect: true,
    refetchOnWindowFocus: false,
  });

  if (isError) {
    return (
      <h2 style={{ textAlign: "center", margin: "100px 0" }}>
        {error.message}
      </h2>
    );
  }

  const transformProducts = () => {
    let sortedProducts = data.data.Products.data;

    if (sort) {
      sortedProducts = sortedProducts?.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts?.filter((prod) => prod.inStock);
    }
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
        {isLoading ? (
          <Box
            sx={{
              margin: "auto",
            }}
          >
            <CircularProgress
              style={{
                color: theme === "light" ? "#000" : "#980433",
              }}
            />
          </Box>
        ) : (
          transformProducts()?.map((i, index) => {
            return (
              <Fade triggerOnce direction="left" key={index}>
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
                      theme === "light"
                        ? "0 0 1px #090d2a"
                        : "0 0 15px #980433",
                  }}
                >
                  <img style={{ width: "50%" }} src={i.img} alt={i.name} />
                  <h1 className={`${theme} word-break-all `}>
                    {i.name.toUpperCase()}
                  </h1>
                  <h3 className={theme}>
                    {i.description.split(" ").splice(0, 10).join(" ") +
                      " " +
                      "..."}
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    {cart.some((product) => product.id === i.id) ? (
                      <Flip
                        triggerOnce
                        direction="horizontal"
                        collapse
                        when={!show}
                      >
                        <Button
                          variant="contained"
                          color="error"
                          onClick={() => {
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: i,
                            });
                          }}
                          style={{ fontSize: "12px" }}
                        >
                          Remove From Cart
                        </Button>
                      </Flip>
                    ) : (
                      <Flip direction="vertical" triggerOnce>
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
                          style={{ fontSize: "12px" }}
                        >
                          {!i.inStock ? "Out of Stock" : "Add to Cart"}
                        </Button>
                      </Flip>
                    )}
                    <h4 className={theme}>{"Price: " + i.price + "€"}</h4>
                  </div>
                </Grid>
              </Fade>
            );
          })
        )}
      </Container>
    </div>
  );
};

export default Vins;
