import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header/Header";
import ProfilPersonnel from "./Pages/ProfilPersonnel";
import { useEffect, useState, useTransition } from "react";
import Loading from "./Loading/Loading";
import Product from "./Pages/Product";
import Panier from "./Pages/Panier";
import { CartState } from "./Context/UseContext";
import Footer from "./Components/Footer/Footer";
import Vins from "./Pages/Vins/Vins";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";

function App() {
  const [loading, startTransition] = useTransition();
  const [state, setState] = useState(null);

  useEffect(() => {
    startTransition(() => {
      setState(true);
    }, []);
  }, [state]);

  const {
    state: { theme },
  } = CartState();

  return (
    <span style={{ position: "relative" }} className={theme}>
      {loading ? (
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
            <Route path="/:id" element={<Product />} />
            <Route path="/Panier" element={<Panier />} />
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
          zIndex: 10000
        }}
        onClick={() => {
          window.scrollTo({
            top: 100,
            left: 100,
            behavior: "smooth",
          });
        }}
      />
    </span>
  );
}

export default App;
