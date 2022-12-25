import { Button, Grid, Skeleton } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState, useTransition } from "react";
import { CartState } from "../../Context/UseContext";
import Filter from "./Filter";
import Logo from "../../Icons/Logo_SVG.svg";
import Fade from "react-awesome-reveal";
import { Flip } from "react-awesome-reveal";
import "../home.css";
import axios from "axios";
const Vins = () => {
  const [loading, startTransition] = useTransition();
  const [state, setState] = useState(null);
  const [products, setProducts] = useState([]);
  const { show } = useState(false);

  useEffect(() => {
    const Data = async () => {
      const data = await axios.get(
        "https://us-central1-vinsgeorgiens-a471b.cloudfunctions.net/vinsGeorgien",
        { headers: { "Access-Control-Allow-Origin": "*" } }
      );
      setProducts(data.data.Products.data);
    };
    Data();
    startTransition(() => {
      setState(true);
    }, []);
  }, [state]);

  const {
    state: { theme, cart },
    dispatch,
    productFilterState: { byStock, sort },
  } = CartState();

  const transformProducts = () => {
    let sortedProducts = products;

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
                    theme === "light" ? "0 0 1px #090d2a" : "0 0 15px #980433",
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
