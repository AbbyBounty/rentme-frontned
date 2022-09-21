import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Navbar from '../../common/component/NavBar';

const CustomerProfile = () => {
  const history = useHistory()

  const userSignIn = useSelector(state => state?.userSignIn)

  console.log("🚀 ~ file: Info.js ~ line 8 ~ Info ~ userSignIn[0]", userSignIn[0])

  const user = JSON.parse(localStorage.getItem('user'))  //u=user
  console.log(user)
  return (
    <div className="p-4 m-10">

      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Pin Code</th>
            <th>Phone No.</th>
          </tr>
        </thead>
        <tbody>
          <tr >
            <td> {userSignIn[0]?.name}</td>
            <td> {userSignIn[0]?.email}</td>
            <td> {userSignIn[0]?.address}</td>
            <td> {userSignIn[0]?.pinCode}</td>
            <td> {userSignIn[0]?.phoneNo}</td>
            <td>
              <button
                onClick={() => {
                  history.push(`/editprofile/${userSignIn[0]?.id}`, { user: userSignIn[0] })
                }}
                className="btn  btn-m bg-pink text-white">
                Edit
              </button>
              <button
                onClick={() => {
                  history.push(`/changepassword/${userSignIn[0]?.id}`, { userSignIn: user })
                }}
                className="btn bg-pink text-white btn-m ml-5">
                Change Password
              </button>
            </td>
            <td>

            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default CustomerProfile;