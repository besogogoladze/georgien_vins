import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./Media.css";
import { BrowserRouter } from "react-router-dom";
import Auth0ProviderWithHistory from "./Auth/AuthProvider";
import Context from "./Context/UseContext";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Context>
      <Auth0ProviderWithHistory>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Auth0ProviderWithHistory>
    </Context>
  </React.StrictMode>
);
