import React, { useEffect } from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Panier from "../../../Icons/panier.webp";
import { Container } from "@mui/system";
import { CartState } from "../../../Context/UseContext";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import StoreMallDirectoryOutlinedIcon from "@mui/icons-material/StoreMallDirectoryOutlined";
import RemoveShoppingCartRoundedIcon from "@mui/icons-material/RemoveShoppingCartRounded";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Tooltip,
} from "@mui/material";
import PaypalCheckoutButton from "../../Paypal/PaypalCheckoutButton";
import "../../../Media.css";
import "../Header.css";

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
        <span style={{ marginRight: "5px" }}>
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
            borderRadius: "2rem 2rem 1rem 1rem",
            boxSizing: "border-box",
            overflowY: cart.length === 0 ? null : "overlay",
            padding: "0",
            position: "relative",
          }}
          sx={style}
          className="modalPanier"
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: theme === "light" ? "#fff" : "#000",
              backgroundColor: "#980433",
              position: "sticky",
              top: "0",
              zIndex: "1000",
              padding: "10px 0",
              borderRadius: "2rem 2rem 0 0",
            }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            <Typography
              style={{
                fontSize: "25px",
              }}
            >
              Panier
            </Typography>
            <Button
              style={{
                color: theme === "light" ? "#fff" : "#000",
                position: "absolute",
                top: "0",
                right: "0",
              }}
              onClick={handleClose}
            >
              <CloseRoundedIcon />
            </Button>
          </div>
          <div>
            <Container style={{ padding: "10px" }}>
              <div className="topOfPanier">
                {cart.length !== 0 ? (
                  <>
                    {cart?.map((i, index) => (
                      <div
                        key={index}
                        style={{
                          margin: "10px 0",
                        }}
                        className="mainPanier"
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
                              className="headPanier"
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "space-between",
                                alignItems: "center",
                              }}
                            >
                              <img
                                style={{
                                  width: "120px",
                                  padding: "5px",
                                  border: `2px solid ${
                                    theme === "light" ? "#ccc" : "#343434"
                                  }`,
                                  borderRadius: "10px",
                                }}
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
                                className="descriptionPanier"
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "flex-start",
                                    gap: "40px",
                                  }}
                                >
                                  <div>
                                    <Tooltip
                                      title={i.description}
                                      style={{
                                        width: "100%",
                                        color:
                                          theme === "light"
                                            ? "#000"
                                            : "#980433",
                                      }}
                                    >
                                      <p>
                                        {i.description
                                          .split(" ")
                                          .splice(0, 30)
                                          .join(" ") +
                                          " " +
                                          "..."}
                                      </p>
                                    </Tooltip>
                                  </div>
                                  <div
                                    style={{
                                      display: "flex",
                                      flexDirection: "column",
                                      gap: "10px",
                                    }}
                                  >
                                    <Box id="modalBox" sx={{ minWidth: 120 }}>
                                      <FormControl fullWidth>
                                        <InputLabel
                                          style={{
                                            color:
                                              theme === "light"
                                                ? "#000"
                                                : "#980433",
                                            borderColor:
                                              theme === "light"
                                                ? "#000"
                                                : "#980433",
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
                                              theme === "light"
                                                ? "#000"
                                                : "#980433",
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
                                          {[...Array(i.inStock).keys()].map(
                                            (x) => (
                                              <MenuItem
                                                value={x + 1}
                                                key={x + 1}
                                              >
                                                {x + 1}
                                              </MenuItem>
                                            )
                                          )}
                                        </StyledFieldset>
                                      </FormControl>
                                    </Box>
                                    <h3
                                      style={{
                                        color:
                                          theme === "light"
                                            ? "#000"
                                            : "#980433",
                                      }}
                                    >
                                      {"Price: " + i.price + "€"}
                                    </h3>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Container>
                          <Container
                            style={{
                              textAlign: "end",
                            }}
                            className="removeItemsFromPanier"
                          >
                            <Button
                              style={{
                                textAlign: "end",
                                width: "10%",
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
                    <div
                      className="ClearCart_TotalPrice"
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                      }}
                    >
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
                        <RemoveShoppingCartRoundedIcon />
                      </Button>
                      <div>
                        <h4
                          style={{
                            color: theme === "light" ? "#000" : "#980433",
                            border: "2px #333 solid",
                            borderRadius: "2rem",
                            padding: "10px",
                          }}
                        >
                          Total Price: {totalPrice + "€"}
                        </h4>
                      </div>
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
              </div>
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
                      <PaypalCheckoutButton
                        modal={setOpen}
                        totalPrice={totalPrice}
                      />
                    </div>
                  </>
                ) : null}
              </div>
              <Button
                style={{
                  backgroundColor: "rgb(152, 4, 51)",
                  borderRadius: "10px",
                  position: "sticky",
                  bottom: "20px",
                  left: "20px",
                }}
              >
                <NavLink
                  style={{
                    color: "#fff",
                  }}
                  onClick={handleClose}
                  to={"/Panier"}
                >
                  <StoreMallDirectoryOutlinedIcon
                    style={{
                      fontSize: "30px",
                    }}
                  />
                  <Typography>Panier</Typography>
                </NavLink>
              </Button>
            </Container>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default HeaderPanier;
