import { Button, Grid, Skeleton, Stack } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { CartState } from "../../Context/UseContext";
import Filter from "./Filter";
import Fade from "react-awesome-reveal";
import { Flip } from "react-awesome-reveal";
import "../home.css";
import axios from "axios";
import { useQuery } from "react-query";
const Vins = () => {
  const { show } = useState(false);
  let skeletons = ["", "", "", "", "", ""];

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
      <h2 style={{ width: "80%", textAlign: "center", margin: "100px auto" }}>
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
        {isLoading
          ? skeletons.map((e, index) => {
              return (
                <div key={index} style={{ display: "flex" }}>
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
                    <Stack spacing={1}>
                      <Skeleton
                        style={{
                          display: "flex",
                          justifySelf: "center",
                          alignSelf: "center",
                        }}
                        sx={{
                          bgcolor: theme === "light" ? "#A9A9A9" : "#980433",
                        }}
                        variant="rectangular"
                        width={110}
                        height={118}
                      />
                      <Skeleton
                        style={{
                          display: "flex",
                          justifySelf: "center",
                          alignSelf: "center",
                        }}
                        variant="text"
                        sx={{
                          fontSize: "1rem",
                          bgcolor: theme === "light" ? "#A9A9A9" : "#980433",
                        }}
                        width={110}
                      />
                      <Skeleton
                        style={{
                          display: "flex",
                          justifySelf: "center",
                          alignSelf: "center",
                        }}
                        variant="rectangular"
                        width={210}
                        height={60}
                        sx={{
                          bgcolor: theme === "light" ? "#A9A9A9" : "#980433",
                        }}
                      />
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          width: "210px",
                          margin: "5px auto",
                        }}
                      >
                        <Skeleton
                          variant="rounded"
                          width={60}
                          height={40}
                          sx={{
                            bgcolor: theme === "light" ? "#A9A9A9" : "#980433",
                          }}
                        />
                        <Skeleton
                          variant="rounded"
                          width={60}
                          height={40}
                          sx={{
                            bgcolor: theme === "light" ? "#A9A9A9" : "#980433",
                          }}
                        />
                      </div>
                    </Stack>
                  </Grid>
                </div>
              );
            })
          : transformProducts()?.map((i, index) => {
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
            })}
      </Container>
    </div>
  );
};

export default Vins;
