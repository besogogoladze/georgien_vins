import { Button, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { CartState } from "../../Context/UseContext";
import Filter from "./Filter";

const Vins = () => {
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
        }}
      >
        {transformProducts()?.map((i, index) => (
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
            ) : (
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
            )}
          </Grid>
        ))}
      </Container>
    </div>
  );
};

export default Vins;
