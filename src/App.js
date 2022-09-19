import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AdminDashBoard from './admin/index'
import Cart from './customer/component/Cart';
import CategoryList from './common/component/Categorylist';
import CategoryNavbar from './common/component/NavBar';
import CustomerChangePassword from './customer/component/CustomerChangePassword';
import ChangeSellerPassword from './seller/component/ChangeSellerPassword';
import Delivery from './common/component/Delivery';
import EditProfile from './common/component/EditProfile';
import Footer from './components/common/component/Footer';
import Home from './components/Home';
import Info from './common/component/Info';
import Logout from './common/component/Logout';
import Navbar from './common/component/NavBar';
import Order from './customer/component/Order';
import Payment from './customer/component/Payment';
import SellerDashboard from './seller/index';
import SellerLogout from './seller/component/SellerLogout';
import SellerSignIn from './seller/component/SellerSignIn';
import CustomerSign from './customer/component/CustomerSign';
import CustomerSignUp from './customer/component/CustomerSignUp';
import SignUpSeller from './seller/component/SignUpSeller';
import AboutUs from './common/pages/AboutUs';
import Category from './common/pages/Category';
import ContactUs from './common/pages/ContactUs';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div className="app">

      <BrowserRouter>
        <Navbar />

        <Switch>


          <Route path="/admin" component={AdminDashBoard} ></Route>

          <Route path="/sellerDashboard" component={SellerDashboard}></Route>
          <Route path="/sellerSignup" component={SignUpSeller}></Route>
          <Route path="/sellerSignin" component={SellerSignIn}></Route>
          <Route path="/sellerLogout" component={SellerLogout}></Route>
          <Route path="/changeSellerPassword" component={ChangeSellerPassword}></Route>

          <Route path="/signin-signup" component={CustomerSign}></Route>
          <Route path="/signup" component={CustomerSignUp}></Route>
          <Route path="/changepassword" component={CustomerChangePassword}></Route>

          <Route path="/cart" component={Cart}></Route>

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

      <Footer />

    </div>
  );
}

export default App;
