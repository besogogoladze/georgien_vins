import { lazy, Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import { useEffect, useState, useTransition } from "react";
import Loading from "./Loading/Loading";
import { CartState } from "./Context/UseContext";
import Footer from "./Components/Footer/Footer";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import Georgie from "./Pages/Georgie/Georgie";
import Histoire from "./Pages/Georgie/Histoire/Histoire";
import Cepages from "./Pages/Georgie/Cepages/Cepages";
import Qvevri from "./Pages/Georgie/Qvevri/Qvevri";
const Home = lazy(() => import("./Pages/Home"));
const ProfilPersonnel = lazy(() => import("./Pages/ProfilPersonnel"));
const Product = lazy(() => import("./Pages/Product"));
const Panier = lazy(() => import("./Pages/Panier"));
const Vins = lazy(() => import("./Pages/Vins/Vins"));
const Spiritueux = lazy(() => import("./Pages/Spiritueux/Spiritueux"));

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
    <Suspense fallback={null}>
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
              <Route path="/SPIRITUEUX" element={<Spiritueux />} />
              <Route path="/GEORGIE" element={<Georgie />} />
              <Route path="/GEORGIE/Histoire" element={<Histoire />} />
              <Route path="/GEORGIE/Cepages" element={<Cepages />} />
              <Route path="/GEORGIE/Qvevri" element={<Qvevri />} />
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
      </span>
    </Suspense>
  );
}

export default App;
