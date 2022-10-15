import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
  const Domain = process.env.REACT_APP_AUTH0_DOMAINI;
  const ClientId = process.env.REACT_APP_AUTH0_CLIENTIS_ID;

  return (
    <React.StrictMode>
      <Auth0Provider
        domain={Domain}
        clientId={ClientId}
        redirectUri={window.location.origin}
      >
        {children}
      </Auth0Provider>
    </React.StrictMode>
  );
};

export default Auth0ProviderWithHistory;
