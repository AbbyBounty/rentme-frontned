import { Link, useHistory } from 'react-router-dom';
import axios from 'axios'
import { useState, useEffect } from 'react'
import { url } from '../../common/constants'
import SellerMenuBar from './SellerMenuBar';
import { useSelector } from 'react-redux';


const SellerProfile = () => {

  const userSignIn = useSelector(state => state?.userSignIn)


  const history = useHistory()



  return (


    <div className="grid grid-cols-4">




      <div className="col-span-3 p-3">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-gray-500 uppercase ">Seller Id</th>
              <th className="text-gray-500 uppercase ">Company Name</th>
              <th className="text-gray-500 uppercase ">Company Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> {userSignIn[0]?.sellerId} </td>
              <td> {userSignIn[0]?.companyName}</td>
              <td>{userSignIn[0]?.companyEmail}</td>
              <td>{userSignIn[0]?.companyPhone}</td>
              <td>{userSignIn[0]?.companyAddress}</td>
              <td>{userSignIn[0]?.gstin}</td>
            </tr>

            <tr>

            </tr>
          </tbody>
        </table>


        <button
          onClick={() => {
            history.push(`/sellerEditProfile/${userSignIn[0]?.sellerId}`)
          }}
          className="text-blue-600 font-medium hover:text-indigo-500 p-3" >
          Edit
        </button>

        <button
          onClick={() => {
            history.push(`/changeSellerPassword/${userSignIn[0]?.sellerId}`, { seller: userSignIn[0] })
          }}
          className="text-red-600 font-medium hover:text-indigo-500 p-3">
          Change password
        </button>

      </div>

    </div>

  )
}
export default SellerProfile;