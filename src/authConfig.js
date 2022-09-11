import { LogLevel } from "@azure/msal-browser"

export const msalConfig = {
  auth: {
    clientId: "70059a1f-2e97-405b-a4a3-41ebc00d5d39",
    authority:
      "https://login.microsoftonline.com/745e78c5-bceb-4a28-963a-37a6a53cfec3",
    // redirectUri: "https://comforting-choux-598ac1.netlify.app",
    // redirectUri: "https://outbound-priority-changer.dgaauto.com/",
    redirectUri: "http://localhost:3000/",
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message)
            return
          case LogLevel.Info:
            console.info(message)
            return
          case LogLevel.Verbose:
            console.debug(message)
            return
          case LogLevel.Warning:
            console.warn(message)
            return
        }
      },
    },
  },
}

export const loginRequest = {
  scopes: ["User.Read"],
}

export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
}
