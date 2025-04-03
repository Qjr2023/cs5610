import React from 'react'
import { Auth0Provider } from "@auth0/auth0-react";
import.meta.env



export default function Auth0ProviderWithHistory({childern}) {
    const navigate = useNavigate();
    console.log(import.meta.env)
  return (
    <Auth0Provider 
    domain={import.meta.env.VITE_AUTH0_DOMAIN} 
    clientId={import.meta.env.VITE_AUTH0_CLIENT_ID} 
    authorizationParams={{redirect_uri: window.location.origin}}
    onRedirectCallback={(appState) => {
        navigate((appState && appState.returnTo)  || window.location.pathname);
      }
    }
    >
        {childern}
    </ Auth0Provider>
  )
}
