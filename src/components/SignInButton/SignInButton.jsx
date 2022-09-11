import React from "react"
import { useMsal } from "@azure/msal-react"
import { loginRequest } from "../../authConfig"
import classes from "./SignInButton.module.css"

export const SignInButton = () => {
  const { instance } = useMsal()

  const handleLogin = loginType => {
    if (loginType === "popup") {
      instance.loginPopup(loginRequest).catch(e => {
        console.log(e)
      })
    } else if (loginType === "redirect") {
      instance.loginRedirect(loginRequest).catch(e => {
        console.log(e)
      })
    }
  }
  return (
    <button
      className={classes.SignInButton}
      onClick={() => handleLogin("redirect")}
    >
      Sign In Now
    </button>
  )
}
