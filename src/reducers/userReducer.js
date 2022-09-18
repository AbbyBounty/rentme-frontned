import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,

} from '../constants/userConstant'



export const userSigninReducer = (state = [], action) => {
  switch (action.type) {

    case USER_SIGNIN_SUCCESS:
      return [...state, action.payload]
    case USER_SIGNIN_FAIL:
      return [...state, action.payload]
    case USER_SIGNOUT:
      return []
    default:
      return state
  }
}

