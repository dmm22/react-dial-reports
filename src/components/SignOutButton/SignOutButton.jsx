import React from "react"
import { useMsal } from "@azure/msal-react"
import classes from "./SignOutButton.module.css"

/**
 * Renders a sign-out button
 */
export const SignOutButton = () => {
  const { instance } = useMsal()

  const handleLogout = () => {
    instance.logoutRedirect({ postLogoutRedirectUri: "/" })
  }

  return (
    <button className={classes.SignOutButton} onClick={() => handleLogout()}>
      Sign Out
    </button>
  )
}
