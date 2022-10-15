import React from "react";
import { CartState } from "../../Context/UseContext";
import { Container } from "@mui/system";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Button, Checkbox, FormGroup } from "@mui/material";

const Filter = () => {
  const {
    state: { theme },
    productFilterState: { byStock, sort },
    productFilterDispatch,
  } = CartState();

  return (
    <div id="filter">
      <Container
        id="filterContainer"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginTop: "80px",
          paddingTop: "10px",
          paddingBottom: "80px",
          backgroundColor: "#343a40",
          color: theme === "light" ? "#fff" : "#980433",
          gap: "20px",
        }}
      >
        <FormControl>
          <FormLabel
            style={{
              padding: "20px 0",
              fontSize: "25px",
              color: theme === "light" ? "#fff" : "#980433",
            }}
            id="demo-radio-buttons-group-label"
          >
            Filter Products
          </FormLabel>
          <RadioGroup
            id="filterRadio"
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Ascending"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="Ascending"
              control={
                <Radio
                  sx={{
                    color: "rgb(216, 27, 96)",
                    "&.Mui-checked": {
                      color: "rgb(216, 27, 96)",
                    },
                  }}
                />
              }
              label="Ascending"
              onChange={() =>
                productFilterDispatch({
                  type: "SORT_BY_PRICE",
                  payload: "lowToHigh",
                })
              }
              checked={sort === "lowToHigh" ? true : false}
            />
            <FormControlLabel
              value="Descending"
              control={
                <Radio
                  sx={{
                    color: "rgb(216, 27, 96)",
                    "&.Mui-checked": {
                      color: "rgb(216, 27, 96)",
                    },
                  }}
                />
              }
              label="Descending"
              onChange={() =>
                productFilterDispatch({
                  type: "SORT_BY_PRICE",
                  payload: "highToLow",
                })
              }
              checked={sort === "highToLow" ? true : false}
            />
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: "rgb(216, 27, 96)",
                      "&.Mui-checked": {
                        color: "rgb(216, 27, 96)",
                      },
                    }}
                    onChange={() =>
                      productFilterDispatch({
                        type: "FILTER_BY_STOCK",
                      })
                    }
                    checked={byStock}
                  />
                }
                label="Out Of Stock"
              />
            </FormGroup>
          </RadioGroup>
        </FormControl>
        <Button
          variant="contained"
          color="success"
          style={{ fontSize: "15px" }}
          onClick={() =>
            productFilterDispatch({
              type: "CLEAR_FILTERS",
            })
          }
        >
          CLEAR FILTER
        </Button>
      </Container>
    </div>
  );
};

export default Filter;
