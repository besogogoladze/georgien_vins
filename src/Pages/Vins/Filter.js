import React, { useState } from "react";
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
  const [filterExpanded, setFilterExpanded] = useState(true);
  const [categoryExpanded, setCategoryExpanded] = useState(true);
  const {
    state: { theme },
    productFilterState: { byStock, sort, byCategory },
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
          color: theme === "light" ? "#000" : "#980433",
          gap: "20px",
        }}
      >
        <Accordion
          expanded={!filterExpanded}
          style={{
            width: "100%",
            backgroundColor: theme === "light" ? "transparent" : "#333",
            borderRadius: "2rem",
          }}
        >
          <AccordionSummary
            onClick={() => setFilterExpanded(!filterExpanded)}
            expandIcon={
              <TuneRoundedIcon
                style={{ color: theme === "light" ? "#000" : "#980433" }}
              />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
            style={{
              height: "0px",
              margin: "0",
              cursor: "pointer",
              boxShadow: `0px 3px 5px 0px ${
                theme === "light" ? "#000" : "#980433"
              }`,
              borderRadius: "2rem",
            }}
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
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue=""
                name="radio-buttons-group"
                style={{ gap: "5px" }}
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
                  style={{
                    color: theme === "light" ? "#000" : "#980433",
                    margin: "0",
                  }}
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
                  style={{
                    color: theme === "light" ? "#000" : "#980433",
                    margin: "0",
                  }}
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
                    style={{
                      color: theme === "light" ? "#000" : "#980433",
                      margin: "0",
                    }}
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
                {byStock || sort === "lowToHigh" || sort === "highToLow" ? (
                  <Fade top>
                    <Button
                      style={{
                        fontSize: "15px",
                        backgroundColor: "#980433",
                        color: "#fff",
                      }}
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
              </RadioGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      </Container>
      <Container id="categories">
        <Accordion
          expanded={categoryExpanded}
          style={{
            width: "100%",
            backgroundColor: theme === "light" ? "transparent" : "#333",
            borderRadius: "2rem",
          }}
        >
          <AccordionSummary
            onClick={() => setCategoryExpanded(!categoryExpanded)}
            expandIcon={
              <TuneRoundedIcon
                style={{ color: theme === "light" ? "#000" : "#980433" }}
              />
            }
            aria-controls="panel1a-content"
            style={{
              height: "0px",
              margin: "0",
              cursor: "pointer",
              boxShadow: `0px 3px 5px 0px ${
                theme === "light" ? "#000" : "#980433"
              }`,
              borderRadius: "2rem",
            }}
          >
            <FormLabel
              style={{
                padding: "5px 0",
                fontSize: "25px",
                width: "100%",
                color: theme === "light" ? "#000" : "#980433",
                cursor: "pointer",
              }}
            >
              Categories
            </FormLabel>
          </AccordionSummary>
          <AccordionDetails>
            <FormControl style={{ width: "100%" }}>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                style={{ gap: "5px" }}
              >
                <FormControlLabel
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
                  label="Vins Rouge"
                  style={{
                    color: theme === "light" ? "#000" : "#980433",
                    margin: "0",
                  }}
                  onChange={() =>
                    productFilterDispatch({
                      type: "FILTER_BY_CATEGORY",
                      payload: "Rouge",
                    })
                  }
                  checked={byCategory === "Rouge"}
                />
                <FormControlLabel
                  style={{
                    color: theme === "light" ? "#000" : "#980433",
                    margin: "0",
                  }}
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
                  label="Vins Blanc"
                  onChange={() =>
                    productFilterDispatch({
                      type: "FILTER_BY_CATEGORY",
                      payload: "Blanc",
                    })
                  }
                  checked={byCategory === "Blanc"}
                />
                <FormControlLabel
                  style={{
                    color: theme === "light" ? "#000" : "#980433",
                    margin: "0",
                  }}
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
                  label="Vins Rose"
                  onChange={() =>
                    productFilterDispatch({
                      type: "FILTER_BY_CATEGORY",
                      payload: "Rose",
                    })
                  }
                  checked={byCategory === "Rose"}
                />
                {byCategory ? (
                  <Fade top>
                    <Button
                      style={{
                        fontSize: "15px",
                        backgroundColor: "#980433",
                        color: "#fff",
                      }}
                      onClick={() =>
                        productFilterDispatch({
                          type: "CLEAR_CATEGORY",
                        })
                      }
                    >
                      CLEAR CATEGORIES
                    </Button>
                  </Fade>
                ) : null}
              </RadioGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      </Container>
    </div>
  );
};

export default Filter;
