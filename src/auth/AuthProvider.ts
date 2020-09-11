import { Configuration } from 'msal'
import { MsalAuthProvider, LoginType } from 'react-aad-msal'

const config: Configuration = {
  auth: {
    authority: 'https://login.microsoftonline.com/common',
    clientId: '',
    redirectUri: ''
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: true
  }
}
 
const authenticationParameters = {
  scopes: [
    '<property (i.e. user.read)>',
    'https://<tenant_name>.onmicrosoft.com/<your-application-name>/<scope (i.e. demo.read)>'
  ]
}
 
// Options
const options = {
  loginType: LoginType.Popup,
  tokenRefreshUri: window.location.origin + '/auth.html'
}
 
export const authProvider = new MsalAuthProvider(config, authenticationParameters, options)