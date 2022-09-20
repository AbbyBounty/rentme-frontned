

import React, { Fragment, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon, ShoppingBagIcon, BiAddToQueue } from '@heroicons/react/outline'
import { Link, useHistory, BrowserRouter, Switch, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Logout from './Logout';
import toast, { Toaster } from 'react-hot-toast';
import { USER_SIGNOUT } from '../../constants/userConstant'
import Home from '../../components/Home';
import { Cart } from '../../customer/component/Cart'




function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = (props) => {


  const userSignIn = useSelector((state) => state?.userSignIn)


  const navigation = [
    { name: userSignIn[0]?.role === "SELLER" ? "My Dashboard" : "Home", to: userSignIn[0]?.role === "SELLER" ? "sellerDashboard" : "home", current: false },
    { name: 'Category', to: 'categorylist', current: false },
    { name: 'About Us', to: 'aboutus', current: false },
    { name: 'Contact Us', to: 'contactus', current: false },
  ]

  const dispatch = useDispatch()
  let history = useHistory();
  const [cart, setCart] = React.useState(false)


  const onLogin = () => {
    history.push('/customer-signin')
  }
  const onProfile = () => {
    userSignIn[0]?.role === "SELLER" ? history.push('/sellerProfile') : history.push('/customerProfile')
  }

  // const onCart = () => {
  //   // history.push('/cart')
  //   return (
  //     <Cart />
  //   )
  // }

  const cartItems = useSelector((state) => state.cartItems)



  const onLogout = () => {
    dispatch({
      type: USER_SIGNOUT,
      payload: [],
    })
    toast.success('Logout Successfully  ')
    history.push('/logout')
  }

  return (

    <Disclosure as="nav" className="bg-pink mb-5 sticky top-0 ">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  {/* <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  /> */}
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                  <h4 className="wow fadeInUp ml-2 mt-1 text-indigo-500" >LeasePe</h4>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}


                  </div>
                </div>
              </div>

              {/* {sessionStorage.getItem("isLoggedin") == 'true' ? <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

              } */}


              {Object.keys(userSignIn).length !== 0 && userSignIn[0]?.role !== "SELLER" && <div className="inline-block" onClick={() => setCart(!cart)}>
                <ShoppingBagIcon
                  className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500 inline-block "
                />
                <span className='mr-2 mt-1'>   {cartItems.length}</span>


              </div>}


              {Object.keys(userSignIn).length !== 0 && <span>
                <button onClick={onProfile} className="text-white bg-indigo-600 hover:bg-indigo-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium m-2">
                  My Profile
                </button>
                <button onClick={onLogout} className="text-white bg-indigo-600 hover:bg-indigo-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Logout
                </button>
              </span>}

              {Object.keys(userSignIn).length === 0 && <button onClick={onLogin} className="text-white bg-indigo-600 hover:bg-indigo-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Login
              </button>}


            </div>
          </div>

          {cart && <Cart />}
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}

    </Disclosure>

  )
}



export default Navbar






