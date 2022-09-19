import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import Navbar from '../component/NavBar';
const ContactUs = () => {
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userMessage, setUserMessage] = useState('')
    const history = useHistory()
    const Send = (() => {

        if (userName.length === 0) {
            alert('Enter  UserName')
        }
        else if (userEmail.length === 0) {
            alert('enter Email')
        }

        else {
            const body = {
                userName: userName,
                userEmail: userEmail,
                userMessage: userMessage
            }

            axios.post(`http://localhost:8080/contactUs/add`, body).then(response => {
                const result = response.data
                if (result.status === 'success') {
                    alert(' successfully send Message')
                    history.push('/home')
                }
                else {
                    alert('Error while user ')

                }
            })
        }
    })

    return (
        <div>


            <section id="home" className="hero-section">
                <div className="hero-shape">
                    <img src="assets/img/hero/hero-shape.svg" alt="" className="shape" />
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="hero-content">
                                <h1 className="wow fadeInUp" data-wow-delay=".2s">Contact Us  </h1>
                                <p className="wow fadeInUp" data-wow-delay=".4s">
                                    India’s leading rental platform brings the latest Furniture to Pune. High-quality Furniture at super affordable Monthly Rates. Choose your Delivery Slot. 24/7 Customer Support. Return Anytime. 72 - Hour Delivery. Easy Customer KYC. Free Relocation. 7 - Day Free Trial.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 bg-pink">
                            <div className="hero-img wow fadeInUp" data-wow-delay=".5s">
                                <div className="input-box p-3 ">
                                    Name:  <input className="rounded" type="text" placeholder="Enter your name" value={userName} onChange={(e) => setUserName(e.target.value)} required="required" />
                                </div>
                                <div className="input-box p-3">
                                    Email: <input type="text" className="rounded" placeholder="Enter your email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} required="required" />
                                </div>
                                <div className="input-box message-box p-3">
                                    Message: <input type="text" className="rounded" placeholder="Enter your message" value={userMessage} onChange={(e) => setUserMessage(e.target.value)} required="required" />
                                </div>
                                <div className=" p-3">
                                    <center>
                                        <button type="submit" onClick={Send} className="btn btn-success">Send</button>
                                    </center>

                                    <br />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}





export default ContactUs





