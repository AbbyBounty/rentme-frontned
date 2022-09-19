import web3 from '../gifs/seeyousson.gif'
import SignIn from '../../customer/component/CustomerSign';
import { useHistory, useLocation } from 'react-router-dom'
import Navbar from './NavBar';
import toast, { Toaster } from 'react-hot-toast';
import { useState, useEffect } from 'react'

const Logout = () => {
    const history = useHistory()

    useEffect(() => {



        toast.success(`Logout Success`)



    }, [])
    sessionStorage.clear()

    return (
        <div>

            <Toaster
                position="top-center"
                reverseOrder={true}
            />
            <div className="col-lg-7" >
                <br />
                <blockquote className="blockquote mb-0" style={{ paddingLeft: "100px" }}>
                    <p className="text-center" >
                        {' '}
                        <h2><i>   Have a nice day!!.<br />
                            You are successfully logged out.</i></h2> {' '}
                    </p>
                    <img src={web3} alt="web" style={{ paddingLeft: "200px" }} />


                </blockquote>

            </div>
        </div>

    )
}
export default Logout