import axios from 'axios'
import { url } from '../common/constants'

import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,

} from '../constants/userConstant'
import toast from 'react-hot-toast';
import { useHistory } from 'react-router';




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


export const userSignIn = (email, password, history) => {


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

        const result = response.data

        if (result != null) {

          dispatch({
            type: USER_SIGNIN_SUCCESS,
            payload: response.data,
          })
          history.push('/home')

          toast.success('Welcome')


        } else {
          toast.error('please check email or password')

          history.push('/customerSignIn')

        }



      })
      .catch((error) => {
        toast.error("please check email or password")

      })
  }
}

export const sellerSignInAction = (companyEmail, password, history) => {

  if (companyEmail.length === 0) {
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
      companyEmail,
      password,
    }

    const newUrl = `${url}/seller/sellerAuthenticate`

    axios
      .post(newUrl, body, header)
      .then((response) => {

        const result = response.data
        if (result != null) {

          dispatch({
            type: USER_SIGNIN_SUCCESS,
            payload: response.data,
          })
          history.push('/home')

          toast.success('Welcome')


        } else {
          toast.error('please check email or password')

          history.push('/sellerSignIn')




        }




      })
      .catch((error) => {
        toast.error(error)

      })
  }
}


