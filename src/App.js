import { lazy, Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import { useEffect, useState } from "react";
import Loading from "./Loading/Loading";
import { CartState } from "./Context/UseContext";
import Footer from "./Components/Footer/Footer";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import Georgie from "./Pages/Georgie/Georgie";
import Histoire from "./Pages/Georgie/Histoire/Histoire";
import Cepages from "./Pages/Georgie/Cepages/Cepages";
import Qvevri from "./Pages/Georgie/Qvevri/Qvevri";
import Error from "./Pages/Error/Error";
import { Stack } from "@mui/system";
import { Alert } from "@mui/material";
import WifiOffRoundedIcon from "@mui/icons-material/WifiOffRounded";
import WifiRoundedIcon from "@mui/icons-material/WifiRounded";
const Home = lazy(() => import("./Pages/Home"));
const ProfilPersonnel = lazy(() => import("./Pages/ProfilPersonnel"));
const Product = lazy(() => import("./Pages/Product"));
const Panier = lazy(() => import("./Pages/Panier"));
const Vins = lazy(() => import("./Pages/Vins/Vins"));

function App() {
  const [offline, setOffline] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const {
    state: { theme },
  } = CartState();

  const handleLoading = () => {
    setIsLoading(false);
  };
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOffline(
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert icon={false} className="offlineTheme" severity="error">
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <WifiOffRoundedIcon
                style={{
                  marginRight: "10px",
                }}
              />{" "}
              You are Offline!!!
            </div>
          </Alert>
        </Stack>
      );
    });
    window.addEventListener("online", () => {
      setOffline(
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert icon={false} className="offlineTheme" severity="success">
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <WifiRoundedIcon
                style={{
                  marginRight: "10px",
                }}
              />{" "}
              You are back Online!!!
            </div>
          </Alert>
        </Stack>
      );
      setTimeout(() => {
        setOffline(false);
      }, [5000]);
    });
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <span style={{ position: "relative" }} className={theme}>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Header />
            <Routes>
              <Route path="/georgien_vins" exact element={<Home />} />
              <Route path="/VINS" exact element={<Vins />} />
              <Route
                path="/Profil_Personnel"
                exact
                element={<ProfilPersonnel />}
              />
              <Route path="/georgien_vins/:id" element={<Product />} />
              <Route path="/Panier" element={<Panier />} />
              <Route path="/GEORGIE" element={<Georgie />} />
              <Route path="/GEORGIE/Histoire" element={<Histoire />} />
              <Route path="/GEORGIE/Cepages" element={<Cepages />} />
              <Route path="/GEORGIE/Qvevri" element={<Qvevri />} />
              <Route path="*" element={<Error />} />
              {/* <Route path="/adminPosts/:id" element={<RemovePost />} /> */}
              {/* <Route path="/Boovies/MoviesList/:page?" exact component={Movies} /> */}
              {/* <Route path="/Boovies/Search/:page?" exact component= {Search}/> */}
            </Routes>
            <Footer />
          </>
        )}
        <ArrowCircleUpOutlinedIcon
          style={{
            position: "fixed",
            right: "20px",
            bottom: "20px",
            fontSize: "50px",
            color: theme === "light" ? "#980433" : "#fff",
            cursor: "pointer",
            zIndex: 10000,
          }}
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        />
        {offline ? (
          <div
            style={{
              position: "fixed",
              bottom: "0",
              borderRadius: "20rem",
              zIndex: "1000",
            }}
          >
            {offline}
          </div>
        ) : null}
      </span>
    </Suspense>
  );
}

export default App;
