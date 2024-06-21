import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./Media.css";
import { BrowserRouter } from "react-router-dom";
// import Auth0ProviderWithHistory from "./Auth/AuthProvider";
import Context from "./Context/UseContext";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { QueryClient, QueryClientProvider } from "react-query";
const root = ReactDOM.createRoot(document.getElementById("root"));
export const queryClient = new QueryClient();

root.render(
  <React.Fragment>
    <Context>
      <PayPalScriptProvider
        options={{
          "client-id": "AT0Nob7qpyjHbNquFhdtXwISfAIu37d3JvO1rTGjly9HH-J2aFZJ_pr8RrPeDN2_rFVSnq3QBFEtygCt",
          currency: "EUR",
          locale: "fr_FR",
          "enable-funding": "paylater",
        }}
      >
        {/* <Auth0ProviderWithHistory> */}
          <BrowserRouter>
            <QueryClientProvider client={queryClient}>
              <App />
            </QueryClientProvider>
          </BrowserRouter>
        {/* </Auth0ProviderWithHistory> */}
      </PayPalScriptProvider>
    </Context>
  </React.Fragment>
);
