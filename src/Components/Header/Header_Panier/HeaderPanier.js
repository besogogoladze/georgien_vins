import React, { useEffect } from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Form, NavLink } from "react-router-dom";
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
  NativeSelect,
  Select,
  Tooltip,
} from "@mui/material";
import "../UpHeader.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  backgroundColor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function HeaderPanier() {
  const [open, setOpen] = React.useState(false);
  const [isHover, setIsHover] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);
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
    setDisabled(false);
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

  return (
    <>
      <Button
        style={{
          backgroundColor: isHover ? "#cda246" : null,
        }}
        className={isHover ? " " : theme}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleOpen}
      >
        <span style={{ marginRight: "5px" }} aria-label="cart">
          <StyledBadge
            badgeContent={cart.length > 0 ? cart.length : "0"}
            color={cart.length > 0 ? "success" : "warning"}
            style={{
              color: isHover ? "#fff" : "#5b011d",
            }}
          >
            <ShoppingCartIcon
              color={cart.length > 0 ? "success" : "warning"}
              style={{ color: isHover ? "#success" : "warning" }}
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
        <Box sx={style} className={"modalPanier"}>
          <Container>
            <Typography id="modal-modal-title" variant="h6" component="h2">
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
                        flexWrap: "wrap",
                        justifyContent: "space-around",
                        alignItems: "center",
                        border: "1px #0001 solid",
                        boxSizing: "border-box",
                        boxShadow: "2px 2px #0001",
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
                      <h3>{i.price + "€"}</h3>
                      <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                          <InputLabel style={{ color: "#333 !important" }}>
                            qty
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={i.qty}
                            label="qty"
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
                          </Select>
                        </FormControl>
                      </Box>
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
                  src={Panier}
                  alt="Votre panier est vide!!"
                />
                <Typography style={{ textAlign: "center" }}>
                  Votre Panier est vide!!!
                </Typography>
              </Container>
            )}
            <Button disabled={disabled} onClick={setDisabled}>
              Payer
            </Button>
            <NavLink onClick={handleClose} to={"/Panier"}>
              Afficher le panier
            </NavLink>
          </Container>
        </Box>
      </Modal>
    </>
  );
}

export default HeaderPanier;
