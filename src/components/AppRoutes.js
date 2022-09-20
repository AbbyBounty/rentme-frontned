import React from 'react'
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import AdminDashBoard from '../admin/index'
import { Cart } from '../customer/component/Cart';
import CategoryList from '../common/component/Categorylist';
import CategoryNavbar from '../common/component/NavBar';
import CustomerChangePassword from '../customer/component/CustomerChangePassword';
import Delivery from '../common/component/Delivery';
import EditProfile from '../common/component/EditProfile';
import Footer from '../components/common/component/Footer';
import Home from '../components/Home';
import Logout from '../common/component/Logout';
import Navbar from '../common/component/NavBar';
import Order from '../customer/component/Order';
import Payment from '../customer/component/Payment';

import SellerDashboard from '../seller/index';
import SellerLogout from '../seller/component/SellerLogout';
import SellerSignin from '../seller/component/SellerSignIn';
import SignUpSeller from '../seller/component/SignUpSeller';
import SellerProfile from '../seller/component/SellerProfile';
import SellerEditProfile from '../seller/component/SellerEditProfile';
import ChangeSellerPassword from '../seller/component/ChangeSellerPassword';

import CustomerSign from '../customer/component/CustomerSign';
import CustomerSignUp from '../customer/component/CustomerSignUp';
import CustomerProfile from '../customer/component/CustomerProfile';

import AboutUs from '../common/pages/AboutUs';
import Category from '../common/pages/Category';
import ContactUs from '../common/pages/ContactUs';
import { useSelector } from 'react-redux';


export const Error = () => {

    const history = useHistory()
    return (
        <div className="mt-6 grid  justify-center text-sm text-center text-gray-500">
            <div>
                <h4 className='text-red-600 font-medium '>
                    Please Check URL
                </h4>
            </div>
            <div>
                <p>

                    <button
                        type="button"
                        className="text-indigo-600 font-medium hover:text-indigo-500"
                        onClick={() => history.push('\home')}
                    >
                        Go back to Home<span aria-hidden="true"> &rarr;</span>
                    </button>
                </p>
            </div>
        </div>
    )
}


export const AppRoutes = () => {
    const userSignIn = useSelector(state => state?.userSignIn)


    return (
        <Switch>


            <Route path="/admin" component={AdminDashBoard} ></Route>

            <Route path="/sellerDashboard" component={Object.keys(userSignIn).length === 0 ? Error : SellerDashboard}></Route>
            <Route path="/sellerSignup" component={SignUpSeller}></Route>
            <Route path="/sellerSignin" component={SellerSignin}></Route>
            <Route path="/sellerLogout" component={SellerLogout}></Route>
            <Route path="/changeSellerPassword" component={Object.keys(userSignIn).length === 0 ? Error : ChangeSellerPassword}></Route>
            <Route path="/sellerProfile" component={Object.keys(userSignIn).length === 0 ? Error : SellerProfile}></Route>
            <Route path="/sellerEditProfile" component={Object.keys(userSignIn).length === 0 ? Error : SellerEditProfile}></Route>

            <Route path="/customer-signin" component={CustomerSign}></Route>
            <Route path="/signup" component={CustomerSignUp}></Route>
            <Route path="/changepassword" component={Object.keys(userSignIn).length === 0 ? Error : CustomerChangePassword}></Route>

            <Route path="/cart" component={Object.keys(userSignIn).length === 0 ? Error : Cart}></Route>

            <Route path="/customerProfile" component={Object.keys(userSignIn).length === 0 ? Error : CustomerProfile}></Route>
            <Route path="/editprofile" component={Object.keys(userSignIn).length === 0 ? Error : EditProfile}></Route>
            <Route path="/logout" component={Logout}></Route>
            <Route path="/category" component={Category}></Route>

            <Route path="/home" component={Home}></Route>

            <Route path="/categoryNavbar" component={CategoryNavbar}></Route>
            <Route path="/categoryList" component={CategoryList}></Route>
            <Route path="/contactus" component={ContactUs}></Route>
            <Route path="/aboutus" component={AboutUs}></Route>
            <Route path="/payment" component={Payment}></Route>
            <Route path="/delivery" component={Delivery}></Route>
            <Route path="/order" component={Object.keys(userSignIn).length === 0 ? Error : Order}></Route>


            <Route path="/" component={Home}></Route>


        </Switch>
    )
}
