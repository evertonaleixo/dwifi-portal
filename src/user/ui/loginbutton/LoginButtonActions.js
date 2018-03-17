import AuthenticationContract from '../../../../build/contracts/Authentication.json'
import { browserHistory } from 'react-router'
import store from '../../../store'

const contract = require('truffle-contract')

export const USER_LOGGED_IN = 'USER_LOGGED_IN'
function userLoggedIn(user) {
  return {
    type: USER_LOGGED_IN,
    payload: user
  }
}

export function loginUser() {
  let web3 = store.getState().web3.web3Instance

  // Double-check web3's status.
  if (typeof web3 !== 'undefined') {
    console.log(1)
    return function(dispatch) {
      // Using truffle-contract we create the authentication object.
      const authentication = contract(AuthenticationContract)
      authentication.setProvider(web3.currentProvider)

      // Declaring this for later so we can chain functions on Authentication.
      var userName = 'Usuario';//web3.toUtf8(result);

      dispatch(userLoggedIn({"name": userName}));

      // Used a manual redirect here as opposed to a wrapper.
      // This way, once logged in a user can still access the home page.
      var currentLocation = browserHistory.getCurrentLocation();

      if ('redirect' in currentLocation.query)
      {
        return browserHistory.push(decodeURIComponent(currentLocation.query.redirect));
      }

      return browserHistory.push('/dashboard')
      // Get current ethereum wallet.
    }
  } else {
    console.error('Web3 is not initialized.');
  }
}
