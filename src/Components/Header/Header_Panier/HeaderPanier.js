import React, { useEffect } from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Panier from "../../../Icons/panier.png";
import { Container } from "@mui/system";
import { CartState } from "../../../Context/UseContext";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Tooltip,
} from "@mui/material";
import PaypalCheckoutButton from "../../Paypal/PaypalCheckoutButton";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  backgroundColor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  maxHeight: "80%",
};

function HeaderPanier() {
  const [open, setOpen] = React.useState(false);
  const [isHover, setIsHover] = React.useState(false);
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

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -1,
      top: -10,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

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
    <>
      <Button
        style={{
          backgroundColor: isHover ? "#fff" : null,
        }}
        className={isHover ? " " : theme}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleOpen}
      >
        <span style={{ marginRight: "5px" }} aria-label="cart">
          <StyledBadge
            badgeContent={cart.length > 0 ? cart.length : null}
            color={cart.length > 0 ? "success" : "warning"}
            style={{
              color: isHover ? "#fff" : "#5b011d",
            }}
          >
            <ShoppingCartIcon
              color={cart.length > 0 ? "success" : "warning"}
              style={{ color: isHover ? "#980433" : "#980433" }}
            />
          </StyledBadge>
        </span>
        <span style={{ fontWeight: "bolder", fontSize: "large" }}>
          {totalPrice + "€"}
        </span>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          id="panier"
          style={{
            border: `${theme === "light" ? "#fff" : "#980433"} 2px solid`,
            boxShadow: `5px 5px 20px 0.1px ${
              theme === "light" ? "#001" : "#980433"
            }`,
            backgroundColor: theme === "light" ? "#fff" : "#000",
            borderRadius: "0.8rem",
            boxSizing: "border-box",
            overflowY: cart.length === 0 ? null : "scroll",
          }}
          sx={style}
          className={"modalPanier"}
        >
          <Container>
            <Typography
              style={{ color: theme === "light" ? "#000" : "#980433" }}
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              Panier
            </Typography>
            {cart.length !== 0 ? (
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
                        flexDirection: "column",
                        border: `1px ${
                          theme === "light" ? "#000" : "#980433"
                        } solid`,
                        boxSizing: "border-box",
                        boxShadow: ` ${
                          theme === "light"
                            ? "1px 1px #000"
                            : "0 0 5px 2px #980433"
                        }`,
                        padding: "10px 0",
                      }}
                    >
                      <Container>
                        <div
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <img
                            style={{ width: "120px", padding: "5px" }}
                            src={i.img}
                            alt={i.name}
                          />
                          <div
                            style={{
                              display: "flex",
                              width: "70%",
                              flexDirection: "column",
                              gap: "20px",
                            }}
                          >
                            <Tooltip
                              title={i.description}
                              style={{
                                width: "100%",
                                color: theme === "light" ? "#000" : "#980433",
                              }}
                            >
                              <p>
                                {i.description
                                  .split(" ")
                                  .splice(0, 7)
                                  .join(" ") +
                                  " " +
                                  "..."}
                              </p>
                            </Tooltip>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                flexWrap: "wrap",
                              }}
                            >
                              <h3
                                style={{
                                  color: theme === "light" ? "#000" : "#980433",
                                }}
                              >
                                {i.price + "€"}
                              </h3>
                              <Box id="modalBox" sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                  <InputLabel
                                    style={{
                                      color:
                                        theme === "light" ? "#000" : "#980433",
                                      borderColor:
                                        theme === "light" ? "#000" : "#980433",
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
                                      color:
                                        theme === "light" ? "#000" : "#980433",
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
                            </div>
                          </div>
                        </div>
                      </Container>
                      <Container
                        style={{
                          textAlign: "end",
                        }}
                      >
                        <Button
                          style={{
                            textAlign: "end",
                            width: "20%",
                          }}
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
                      </Container>
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
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <h4
                    style={{
                      color: theme === "light" ? "#000" : "#980433",
                      border: "2px #333 solid",
                      borderRadius: "2rem",
                      padding: "10px",
                    }}
                  >
                    {totalPrice + "€"}
                  </h4>
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
                  src={Panier}
                  alt="Votre panier est vide!!"
                />
                <Typography style={{ textAlign: "center" }}>
                  Votre Panier est vide!!!
                </Typography>
              </Container>
            )}
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
                  <PaypalCheckoutButton
                    modal={setOpen}
                    totalPrice={totalPrice}
                  />
                </div>
                <NavLink style={{}} onClick={handleClose} to={"/Panier"}>
                  Afficher le panier
                </NavLink>
              </>
            ) : null}
          </Container>
        </Box>
      </Modal>
    </>
  );
}

export default HeaderPanier;
