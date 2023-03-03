import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { CartState } from "../Context/UseContext";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import PanierImg from "../Icons/panier.png";
import { styled } from "@mui/material/styles";
import { Select } from "@mui/material";
import PaypalCheckoutButton from "../Components/Paypal/PaypalCheckoutButton";

const Panier = () => {
  const [totalPrice, setTotalPrice] = React.useState();
  const {
    state: { cart, theme },
    dispatch,
  } = CartState();

  useEffect(() => {
    setTotalPrice(
      cart
        .reduce(
          (total, currentValue) =>
            total + Number(currentValue.price).toFixed(2) * currentValue.qty,
          0
        )
        .toFixed(2)
    );
  }, [cart]);
  const StyledFieldset = styled(Select)(() => ({
    "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
      borderColor: theme === "light" ? "#000 !important" : "#980433 !important",
    },
    "& .css-hfutr2-MuiSvgIcon-root-MuiSelect-icon": {
      color: theme === "light" ? "#000" : "#980433",
    },
    "& .css-bpeome-MuiSvgIcon-root-MuiSelect-icon": {
      color: theme === "light" ? "#000" : "#980433",
    },
  }));

  return (
    <div className={theme} style={{ padding: "50px 0" }}>
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
                    border:
                      theme === "light" ? "1px #0001 solid" : "1px #fff1 solid",
                    boxSizing: "border-box",
                    boxShadow:
                      theme === "light" ? "0 2px #0001" : "0 2px #fff1",
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
                      {i.description.split(" ").splice(0, 9).join(" ") +
                        " " +
                        "..."}
                    </p>
                  </Tooltip>
                  <Box id="modalBox" sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel
                        style={{
                          color: theme === "light" ? "#000" : "#980433",
                          borderColor: theme === "light" ? "#000" : "#980433",
                        }}
                      >
                        qty
                      </InputLabel>
                      <StyledFieldset
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={i.qty}
                        label="qty"
                        style={{
                          color: theme === "light" ? "#000" : "#980433",
                        }}
                        onChange={(e) =>
                          dispatch({
                            type: "CHANGE_CART_QTY",
                            payload: {
                              id: i.id,
                              qty: e.target.value,
                            },
                          })
                        }
                      >
                        {[...Array(i.inStock).keys()].map((x) => (
                          <MenuItem value={x + 1} key={x + 1}>
                            {x + 1}
                          </MenuItem>
                        ))}
                      </StyledFieldset>
                    </FormControl>
                  </Box>
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
            <div>
              {cart.length !== 0 ? (
                <>
                  <div
                    className="paypal-button-container"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "50px 0",
                    }}
                  >
                    <PaypalCheckoutButton totalPrice={totalPrice} />
                  </div>
                </>
              ) : null}
            </div>
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
