import { useState } from 'react'
import axios from 'axios'
import { useHistory, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'


const CustomerChangePassword = () => {
  const [password, setnewPassword] = useState('')
  const [id, setid] = useState('')
  const history = useHistory()

  const user = JSON.parse(localStorage.getItem('user'))
  const userSignIn = useSelector(state => state?.userSignIn)


  const ChangePassword = (id) => {
    axios.put(`http://localhost:8080/user/update/${id}`, { 'password': password }).then((response) => {
      alert("success")
      history.push('/signin-signup')
    })
  }
  return (
    <div className="container">
      <input
        onChange={(e) => {
          setid(e.target.value)
        }}
        className="form-control" type="hidden" />

      {
        <h1>Email: {user.email}</h1>

      }
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter new Password.." onChange={(e) => {
        setnewPassword(e.target.value)
      }} />
      <button type="submit" class="btn btn-primary" onClick={() => { ChangePassword(userSignIn[0]?.id) }}>Submit</button>
    </div>


  );
}

export default CustomerChangePassword