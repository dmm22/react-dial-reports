import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react"
import { useIsAuthenticated } from "@azure/msal-react"
import { SignInButton } from "./components/SignInButton/SignInButton"
import Report from "./pages/Report"

const MainContent = () => {
  const isAuthenticated = useIsAuthenticated()
  let appStyle
  if (isAuthenticated) {
    appStyle = "mt"
  } else appStyle = "App"
  return (
    <div className={appStyle}>
      <AuthenticatedTemplate>
        <Report />
      </AuthenticatedTemplate>

      <UnauthenticatedTemplate>
        <div className="notAuthenticatedWrapper">
          <h3 className="card-title">
            Sign in with your DGA email to use this application.
          </h3>
          <SignInButton />
        </div>
      </UnauthenticatedTemplate>
    </div>
  )
}

export default function App() {
  return <MainContent />
}
