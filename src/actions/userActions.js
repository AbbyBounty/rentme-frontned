import axios from 'axios'
import { url } from '../common/constants'

import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,

} from '../constants/userConstant'
import toast, { Toaster } from 'react-hot-toast';

const saveTokenInLocalStorage = (result) => {
  localStorage.setItem('user', JSON.stringify(result))
}

export const addToCartAction1 = (product) => {
  return {
    type: 'add-to-cart',
    product: product,
  }
}

export const removeFromCartAction = (product) => {
  return {
    type: 'remove-from-cart',
    product: product,
  }
}


export const userSignIn = (email, password) => {
  console.log("🚀 ~ file: userActions.js ~ line 32 ~ userSignIn ~ email", email)
  if (email.length === 0) {
    alert('Enter email')
  }
  else if (password.length === 0) {
    alert('enter password')
  }

  return (dispatch) => {


    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const body = {
      email,
      password,
    }
    const newUrl = `${url}/user/authenticate`
    axios
      .post(newUrl, body, header)
      .then((response) => {
        dispatch({
          type: USER_SIGNIN_SUCCESS,
          payload: response.data,
        })

        const result = response.data

        sessionStorage.setItem("name", result.name)

        saveTokenInLocalStorage(result)
        sessionStorage.setItem("isLoggedin", true)
        // history.push('/home')
        toast.success('Welcome ')

        window.location.href = '/home'
      })
      .catch((error) => {
        dispatch({
          type: USER_SIGNIN_FAIL,
          payload: error,
        })
      })
  }
}



