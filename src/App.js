import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AdminDashBoard from './components/admin/index';
import Cart from './components/Cart';
import CategoryList from './components/Categorylist';
import CategoryNavbar from './components/CategoryNavbar';
import Changepassword from './components/Changepassword';
import ChangeSellerPassword from './components/ChangeSellerPassword';
import Delivery from './components/Delivery';
import EditProfile from './components/EditProfile';
import Footer from './components/Footer';
import Home from './components/Home';
import Info from './components/Info';
import Logout from './components/Logout';
import Navbar from './components/NavBar';
import Order from './components/Order';
import Payment from './components/Payment';
import SellerDashboard from './components/seller/index';
import SellerLogout from './components/seller/component/SellerLogout';
import SellerSignIn from './components/seller/component/SellerSignIn';
import Signin from './components/Signin';
import SignUp from './components/SignUp';
import SignUpSeller from './components/seller/component/SignUpSeller';
import AboutUs from './pages/AboutUs';
import Category from './pages/Category';
import ContactUs from './pages/ContactUs';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div className="app">

      <div className="container-fluid">
        <BrowserRouter>

          <Navbar />
          <Switch>


            <Route path="/admin" component={AdminDashBoard} ></Route>

            <Route path="/sellerDashboard" component={SellerDashboard}></Route>
            <Route path="/sellerSignup" component={SignUpSeller}></Route>
            <Route path="/sellerSignin" component={SellerSignIn}></Route>
            <Route path="/sellerLogout" component={SellerLogout}></Route>


            <Route path="/signin-signup" component={Signin}></Route>
            <Route path="/cart" component={Cart}></Route>
            <Route path="/signup" component={SignUp}></Route>
            <Route path="/changepassword" component={Changepassword}></Route>
            <Route path="/changeSellerPassword" component={ChangeSellerPassword}></Route>
            <Route path="/profile" component={Info}></Route>
            <Route path="/editprofile" component={EditProfile}></Route>
            <Route path="/logout" component={Logout}></Route>
            <Route path="/category" component={Category}></Route>

            <Route path="/home" component={Home}></Route>

            <Route path="/categoryNavbar" component={CategoryNavbar}></Route>
            <Route path="/categoryList" component={CategoryList}></Route>
            <Route path="/contactus" component={ContactUs}></Route>
            <Route path="/aboutus" component={AboutUs}></Route>
            <Route path="/payment" component={Payment}></Route>
            <Route path="/delivery" component={Delivery}></Route>
            <Route path="/order" component={Order}></Route>

            <Route path="/" component={Home}></Route>




          </Switch>


        </BrowserRouter>

      </div>
      <Footer />

    </div>
  );
}

export default App;
