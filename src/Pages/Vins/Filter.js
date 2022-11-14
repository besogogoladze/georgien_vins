import React from "react";
import { CartState } from "../../Context/UseContext";
import { Container } from "@mui/system";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Checkbox,
  FormGroup,
} from "@mui/material";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import { Fade } from "react-awesome-reveal";

const Filter = () => {
  const {
    state: { theme },
    productFilterState: { byStock, sort },
    productFilterDispatch,
  } = CartState();

  return (
    <div id="filter" style={{ width: "20%" }}>
      <Container
        id="filterContainer"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginTop: "80px",
          paddingTop: "10px",
          paddingBottom: "80px",
          // backgroundColor: "#343a40",
          color: theme === "light" ? "#000" : "#980433",
          gap: "20px",
        }}
      >
        <Accordion
          style={{
            width: "100%",
            backgroundColor: "transparent",
            cursor: "pointer",
          }}
        >
          <AccordionSummary
            expandIcon={
              <TuneRoundedIcon
                style={{ color: theme === "light" ? "#000" : "#980433" }}
              />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
            style={{ height: "0px", margin: "0" }}
          >
            <FormLabel
              style={{
                padding: "5px 0",
                fontSize: "25px",
                width: "100%",
                color: theme === "light" ? "#000" : "#980433",
                cursor: "pointer",
              }}
              id="demo-radio-buttons-group-label"
            >
              Filtrer
            </FormLabel>
          </AccordionSummary>
          <AccordionDetails>
            <FormControl style={{ width: "100%" }}>
              <RadioGroup
                id="filterRadio"
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Ascending"
                name="radio-buttons-group"
              >
                {byStock || sort ? (
                  <Fade top>
                    <Button
                      variant="outlined"
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
                  </Fade>
                ) : null}
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
                  style={{ color: theme === "light" ? "#000" : "#980433" }}
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
                  style={{ color: theme === "light" ? "#000" : "#980433" }}
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
                    style={{ color: theme === "light" ? "#000" : "#980433" }}
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
          </AccordionDetails>
        </Accordion>
      </Container>
    </div>
  );
};

export default Filter;
