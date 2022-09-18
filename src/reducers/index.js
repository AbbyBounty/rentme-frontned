import { combineReducers } from 'redux'
import cartReducer from './cartReducer'
import { userSigninReducer } from './userReducer'

const reducers = combineReducers({
  cartItems: cartReducer,
  userSignIn: userSigninReducer
})

export default reducers
