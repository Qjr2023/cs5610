import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

export default function Profile() {
    const { user } = useAuth0();
    console.log(user)
  return user && (
    <div>
        <h2>Profile</h2>
        <p>Hello, {user.name}</p>
        <p>{user.email}</p>
        <img src={user.picture} alt={user.name} />
    </div>
  )
}
