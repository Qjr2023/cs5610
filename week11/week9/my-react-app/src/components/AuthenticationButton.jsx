import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

export default function AuthenticationButton() {
    const { isAuthenticated, isLoading } = useAuth0();
    if (isLoading) {
        return <img src="https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg" alt="Loading..." />;
    }
  return (
    isAuthenticated ? <LogoutButton /> : <LoginButton />
  )
}
