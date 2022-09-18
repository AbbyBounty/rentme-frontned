import { Link, useHistory } from 'react-router-dom';
import axios from 'axios'
import { useState, useEffect } from 'react'
import { url } from '../common/constants'
import SellerMenuBar from './SellerMenuBar';


const SellerProfile = () => {
  const history = useHistory()
  //  const user= JSON.parse(localStorage.getItem('user'))  //u=user
  const [seller, setSeller] = useState(JSON.parse(sessionStorage.getItem('seller')))
  console.log(sessionStorage.getItem('seller'))

  //  const [user, setUser] = useState([])

  //  useEffect(() => {
  //    console.log(`User got loaded`)
  //    getUser()
  //  }, [])

  //  const getUser = () => {
  //    axios.get(url + `/users/${user1.userid}`).then((response) => {
  //      const result = response.data
  //      if (result.status === 'success') {
  //        setUser(result.data)
  //      } else {
  //        alert('error while loading the user')
  //      }
  //    })
  //  }

  return (


    <div className="grid grid-cols-4">
      <div >
        {/* <SellerMenuBar /> */}
      </div>



      <div className="col-span-3 p-3">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-gray-500 uppercase ">Seller Id</th>
              <th className="text-gray-500 uppercase ">Company Name</th>
              <th className="text-gray-500 uppercase ">Company Email</th>
              <th className="text-gray-500 uppercase ">Company Phone </th>
              <th className="text-gray-500 uppercase ">Comapny Address</th>
              <th className="text-gray-500 uppercase ">GSTIN</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> {seller.sellerId} </td>
              <td> {seller.companyName}</td>
              <td>{seller.companyEmail}</td>
              <td>{seller.companyPhone}</td>
              <td>{seller.companyAddress}</td>
              <td>{seller.gstin}</td>
            </tr>

            <tr>

            </tr>
          </tbody>
        </table>


        <button
          onClick={() => {
            history.push(`/sellerEditProfile/${seller.sellerId}`)
          }}
          className="text-blue-600 font-medium hover:text-indigo-500 p-3" >
          Edit
        </button>

        <button
          onClick={() => {
            history.push(`/changeSellerPassword/${seller.sellerId}`, { seller: seller })
          }}
          className="text-red-600 font-medium hover:text-indigo-500 p-3">
          Change password
        </button>

      </div>

    </div>

  )
}
export default SellerProfile;