import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import web3Reducer from './util/web3/web3Reducer'
import usuarioReducer from './layouts/usuario/usuarioReducer'

const reducer = combineReducers({
  routing: routerReducer,
  web3: web3Reducer,
  usuarioReducer
})

export default reducer
