import { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { USER_SIGNIN_SUCCESS } from '../../constants/userConstant'
const url = 'http://localhost:8080'
//{{URL}}/user/update/5
//{{URL}}/admin/customers
//admin/customers/1
const EditProfile = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pinCode, setPincode] = useState('')
  const [address, setAddress] = useState('')
  const [phoneNo, setPhoneno] = useState('')
  const [role, setrole] = useState('')
  const history = useHistory()
  const [password, setnewPassword] = useState('')
  const [id, setid] = useState('')
  const [users, setUsers] = useState([])

  const userSignIn = useSelector(state => state?.userSignIn)

  // const getAllfromdb=()=>{

  const getAllfromdb = () => {
    const body = { id: id }
    axios.post(`http://localhost:8080/admin/customerbyId`, body).then((response) => {
      const result = response.data
      console.log(result)
      if (result) {
        console.log(result)
        setUsers(result)
      } else {
        console.log(result)
        alert("error while loading data ")
      }

    })
  }


  const location = useLocation()
  const user = location.state.user
  const dispatch=useDispatch()

  const EditProfile = (id) => {
    const body = {
      id: userSignIn[0].id, name: name,
      email: email,
      password: password,
      phoneNo: phoneNo,
      pinCode: pinCode,
      address: address
    }
    axios.put(`${url}/user/edit-profile/${id}`, body).then((response) => {

      alert("success")
      history.push('/home')
    })
  }
  return (

    <div className="container">
      <input
        onChange={(e) => {
          setid(e.target.value)
        }}
        className="form-control" type="hidden" />
      {/* <button className="btn btn-success"onClick={getAllfromdb}>Show Employee</button> */}
      <label htmlFor="">Name   </label>
      <input  defaultValue={userSignIn[0].name} type="text" class="form-control" id="exampleInputPassword1" onChange={(e) => {
        setName(e.target.value)
      }} /><br />
      <label htmlFor="">Email   </label>
      <input defaultValue={userSignIn[0].email} type="text" class="form-control" onChange={(e) => {
        setEmail(e.target.value)
      }} /><br />
      <label htmlFor="">PhoneNo.  </label>
      <input defaultValue={userSignIn[0].phoneNo} type="text" class="form-control" onChange={(e) => {
        setPhoneno(e.target.value)
      }} /><br />
      <label htmlFor="">Pin Code  </label>
      <input  defaultValue={userSignIn[0].pinCode}type="text" class="form-control" onChange={(e) => {
        setPincode(e.target.value)
      }} /><br />
      <label htmlFor="">City  </label>
      <input defaultValue={userSignIn[0].address} type="text" class="form-control" onChange={(e) => {
        setAddress(e.target.value)
      }} /><br />
      <input defaultValue={userSignIn[0].password} type="hidden" class="form-control" onChange={(e) => {
        setnewPassword(e.target.value)
      }} /><br />
      <button type="submit" class="btn btn-primary" onClick={() => { EditProfile(user.id) }}>Submit</button>

    </div>


  );
}
export default EditProfile
