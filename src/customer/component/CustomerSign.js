
import { Link } from 'react-router-dom'
import { useState } from "react"
import axios from 'axios';
import { url } from '../../common/constants'
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { USER_SIGNIN_SUCCESS } from '../../constants/userConstant'
import { userSignIn } from '../../actions/userActions';

const CustomerSign = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const dispatch = useDispatch()


    const setUser = (result) => {
        dispatch({
            type: USER_SIGNIN_SUCCESS,
            payload: result,
        })
    }

    const saveTokenInLocalStorage = (result) => {
        localStorage.setItem('user', JSON.stringify(result))
    }

    const onSign = () => {
        dispatch(userSignIn(email, password))
    }


    const signIn = (() => {


        if (email.length === 0) {
            alert('Enter email')
        }
        else if (password.length === 0) {

            alert('enter password')
        }

        else {
            const body = { email: email, password: password }

            axios.post(`${url}/user/authenticate`, body).then(response => {


                const result = response.data
                setUser(result)

                sessionStorage.setItem("name", result.name)

                saveTokenInLocalStorage(result)
                sessionStorage.setItem("isLoggedin", true)
                toast.success('Welcome ')

                window.location.href = '/home'

            })


        }

    })





    return (

        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                        <h1 className="title-font font-medium text-3xl text-pink">Welcome to the  <Link target={"_blank"}>LeasePe.com</Link> </h1>
                        <p className="leading-relaxed mt-4">
                            India’s leading rental platform brings the latest Furniture to Pune. High-quality Furniture at super affordable Monthly Rates. Choose your Delivery Slot. 24/7 Customer Support. Return Anytime. 72 - Hour Delivery. Easy Customer KYC. Free Relocation. 7 - Day Free Trial.
                        </p>
                    </div>

                    <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">

                        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign In</h2>

                        <div className="relative mb-4">
                            <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }}
                                type="email"
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                placeholder="test@test.com"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label for="password" className="leading-7 text-sm text-gray-600">Password</label>

                            <input
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }}
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                type="password"
                                placeholder="*****" />
                        </div>
                        <button onClick={onSign} className="text-white bg-pink border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Sign In As Customer
                        </button>

                        <p className="text-xs text-gray-500 mt-3">
                            If you are Seller <Link to="/sellerSignin">Sign In here</Link>
                        </p>

                        <p className="text-xs text-gray-500 mt-3">
                            New User? <Link to="/signup">Signup here</Link>
                        </p>


                    </div>
                </div>
            </section>

        </>




    )
}
export default CustomerSign





