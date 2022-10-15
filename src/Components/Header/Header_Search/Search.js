import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Autocomplete, Button, Modal, TextField } from "@mui/material";
import { CartState } from "../../../Context/UseContext";
import { Box, Container } from "@mui/system";
import { NavLink } from "react-router-dom";
import "./Search.css";
import "../../../index.css"

const Search = () => {
  const {
    state,
    state: { theme },
  } = CartState();
  const [selectedProduct, setSelectedProduct] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    backgroundColor: "#fff",
    border: "2px solid #000",
    boxShadow: 24,
    p: 2,
    borderRadius: "20px",
  };

  const productsData = state.products;

  React.useEffect(() => {
    setSelectedProduct(productsData);
  }, [productsData]);

  return (
    <div>
      <Button onClick={handleOpen}>
        <SearchIcon />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            className="SearchInput"
            disableClearable={false}
            loadingText="Loading..."
            disableCloseOnSelect={false}
            onClose={handleClose}
            style={{
              width: "100%",
              borderColor: "#5b011d !important",
              flexGrow: "5",
            }}
            options={selectedProduct}
            getOptionLabel={(selectedProduct) => `${selectedProduct.name}`}
            isOptionEqualToValue={(option, value) => option.name === value.name}
            noOptionsText={"NO AVAILABLE"}
            renderOption={(props, selectedProduct) => (
              <Box
                className="modalSearch"
                style={{
                  backgroundColor: theme === "light" ? "#fff" : "#090d2a",
                }}
                key={selectedProduct.id}
                {...props}
              >
                <Container>
                  <NavLink to={`/${selectedProduct.id}`}>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        margin: "15px 0",
                        padding: "10px 0",
                        border: "1px #333 solid",
                        justifyContent: "space-around",
                        alignItems: "center",
                        borderRadius: "5px",
                      }}
                    >
                      <img
                        style={{ width: "100px" }}
                        src={selectedProduct.img}
                        alt={selectedProduct.name}
                      />
                      <h3>{selectedProduct.name}</h3>
                    </div>
                  </NavLink>
                </Container>
              </Box>
            )}
            autoComplete
            renderInput={(params) => (
              <TextField {...params} label="Mot-clé..." />
            )}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default Search;
