import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, ListGroup, ListGroupItem } from 'reactstrap'
import { BellIcon, MenuIcon, XIcon, ShoppingBagIcon, BiAddToQueue } from '@heroicons/react/outline'

const SellerMenuBar = ({ setSection }) => {
  return (
    <div className="bg-pink border-1 w-full">
      <ListGroup >


        <ListGroupItem className=" border-0 p-3 bg-pink text-white" onClick={(e) => { setSection("dashboard") }}>
          <NavLink className=" border-0  text-gray-100" exact to="/sellerDashboard">



            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
            </svg>
            Dashboard
          </NavLink>
        </ListGroupItem>


        <ListGroupItem className=" border-0 p-3 bg-pink text-white" onClick={(e) => { setSection("addProduct") }}>
          <NavLink className=" border-0  text-gray-100" exact to="/sellerDashboard">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block " fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />

            </svg>
            Add Product
          </NavLink>
        </ListGroupItem>

        <ListGroupItem className=" border-0 p-3 bg-pink " onClick={(e) => { setSection("addCategory") }}>
          <NavLink className=" border-0  text-gray-100" exact to="/sellerDashboard">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Add Category
          </NavLink>
        </ListGroupItem>



        <ListGroupItem className=" border-0 p-3 bg-pink " onClick={(e) => { setSection("product") }}>
          <NavLink className=" border-0  text-gray-100" exact to="/sellerDashboard">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
            Products
          </NavLink>
        </ListGroupItem>

        <ListGroupItem className=" border-0 p-3 bg-pink " onClick={(e) => { setSection("category") }}>
          <NavLink className=" border-0  text-gray-100" exact to="/sellerDashboard">

            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            Category
          </NavLink>
        </ListGroupItem>

        <ListGroupItem className=" border-0 p-3 bg-pink ">
          <NavLink className=" border-0  text-gray-100" exact to="/sellerDashboard">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Update Profile
          </NavLink>

        </ListGroupItem>


      </ListGroup>


    </div>
  )
}

export default SellerMenuBar




