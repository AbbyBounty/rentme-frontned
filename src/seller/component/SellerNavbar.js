import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'


const SellerNavbar = () => {


  return (
    <nav class="navbar navbar-expand-md navbar-dark bg-dark " >

      <div className="container">
        <Link className="navbar-brand float-left" to="/sellerDashboard">
          Grocery Shop
        </Link>

        <div className="collapse navbar-collapse" style={{ marginLeft: 620 }}>
          <ul className="navbar-nav mr-auto"></ul>
          <ul className="navbar-nav mr-auto justify-content-end">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/sellerProfile">
                <Button outline color="success">
                  My Profile
                </Button>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/sellerLogout">
                <Button outline color="success" >
                  Logout
                </Button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default SellerNavbar