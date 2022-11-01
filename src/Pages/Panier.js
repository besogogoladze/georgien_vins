import { Button, Container, Tooltip, Typography } from "@mui/material";
import React from "react";
import { CartState } from "../Context/UseContext";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import PanierImg from "../Icons/panier.png";

const Panier = () => {
  // const [totalPrice, setTotalPrice] = React.useState();
  const {
    state: { cart, theme, totalPrice },
    dispatch,
  } = CartState();

  return (
    <div className={theme} style={{paddingTop: '10px'}}>
      <Container>
        {cart.length > 0 ? (
          <>
            {cart?.map((i, index) => (
              <div
                key={index}
                style={{
                  margin: "10px 0",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                    alignItems: "center",
                    border: theme === 'light' ? "1px #0001 solid" : "1px #fff1 solid",
                    boxSizing: "border-box",
                    boxShadow: theme === 'light'? "0 2px #0001" : "0 2px #fff1",
                    padding: "10px 0",
                  }}
                >
                  <img
                    style={{ width: "120px", padding: "5px" }}
                    src={i.img}
                    alt={i.name}
                  />
                  <Tooltip title={i.description} style={{ width: "20%" }}>
                    <p>
                      {i.description.split(" ").splice(0, 7).join(" ") +
                        " " +
                        "..."}
                    </p>
                  </Tooltip>
                  <h3>{i.price.toFixed(2) + "€"}</h3>
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
                    <DeleteForeverIcon />
                  </Button>
                </div>
              </div>
            ))}
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                dispatch({
                  type: "CLEAR_CART",
                });
              }}
            >
              Clear Cart
              <DeleteForeverIcon />
            </Button>
            <h4 style={{ textAlign: "end" }}>
              Total Price: {totalPrice + "€"}
            </h4>
          </>
        ) : (
          <Container
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              style={{ width: "70%" }}
              src={PanierImg}
              alt="Votre panier est vide!!"
            />
            <Typography style={{ textAlign: "center" }}>
              Votre Panier est vide!!!
            </Typography>
          </Container>
        )}
      </Container>
    </div>
  );
};

export default Panier;
