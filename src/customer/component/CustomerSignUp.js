import axios from 'axios';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { url,emailurl } from '../../common/constants';
import { validEmail, validPassword, validPhone, validPincode } from '../../common/Regex';
import toast, { Toaster } from 'react-hot-toast';


const CustomerSignUp = () => {

  const [id, setId] = useState(0)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phoneNo, setPhoneNo] = useState('')
  const [address, setAddress] = useState('')
  const [pinCode, setPinCode] = useState('')

  const history = useHistory()
  const [invalidErr, setInvalidErr] = useState(false)
  const [invalidErrMsg, setInvalidErrMsg] = useState("")

  const [addressErr, setAddressErr] = useState(false)
  const [addressErrMsg, setAddressErrMsg] = useState('')

  const [nameErr, setNameErr] = useState(false);
  const [nameErrMsg, setNameErrMsg] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [emailErrMsg, setEmailErrMsg] = useState("");
  const [pwdError, setPwdError] = useState(false);
  const [pwdErrorMsg, setPwdErrorMsg] = useState("");
  const [phoneErr, setPhoneErr] = useState(false);
  const [phoneErrMsg, setPhoneErrMsg] = useState("");
  const [pinCodeErr, setPinCodeErr] = useState(false);
  const [pinCodeErrMsg, setPinCodeErrMsg] = useState("");


 


  const signup = (() => {
    setNameErr(false)
    setEmailErr(false)
    setPwdError(false)
    setPhoneErr(false)
    setPinCodeErr(false)

    setAddressErr(false)

    if (name.length == 0) {
      setNameErr(true)
      toast.error('fix error')

      setNameErrMsg("please enter name")
    }
    else if (email.length == 0) {
      setEmailErr(true);
      toast.error('fix error')

      setEmailErrMsg("please enter email")
    }
    else if (!validEmail.test(email)) {
      setEmailErr(true);
      toast.error('fix error')

      setEmailErrMsg("please enter a valid email")
    }
    else if (password.length == 0) {
      setPwdError(true);
      toast.error('fix error')

      setPwdErrorMsg("please enter password")
    }
    else if (!validPassword.test(password)) {
      setPwdError(true);
      toast.error('fix error')

      setPwdErrorMsg("Your password is not strong enough")
    }
    else if (phoneNo.length == 0) {
      setPhoneErr(true);
      toast.error('fix error')

      setPhoneErrMsg("please enter phone number")
    }
    else if (!validPhone.test(phoneNo)) {
      setPhoneErr(true);
      toast.error('fix error')

      setPhoneErrMsg("please enter a valid phone number")
    }
    else if (address.length == 0) {
      setAddressErr(true)
      toast.error('fix error')

      setAddressErrMsg("Please Enter Address")
    }
    else if (pinCode.length == 0) {
      setPinCodeErr(true);
      toast.error('fix error')

      setPinCodeErrMsg("please enter pincode")
    }

    else if (!validPincode.test(pinCode)) {
      setPinCodeErr(true);
      toast.error('fix error')

      setPinCodeErrMsg("please enter a valid pincode")
    }
  
    else {
      console.log("in signup form ß")
      const body = { id: id, name: name, email: email, password: password, phoneNo: phoneNo, address: address, pinCode: pinCode }
      axios.post(url + `/admin/register`, body).then(response => {
        const result = response.data;
        if (result) {
          axios.post(emailurl + `/send-mail/?email=${email}`).then(response => {
            const result = response.data;
            console.log("🚀 ~ file: SignUpSeller.js ~ line 129 ~ axios.post ~ result", result)
            if (result) {
              toast.success('email sent successfully ! ')
            }
            else {
              alert('error')
            }
          })
          toast.success('Sign Up Success Please Login to continue ')
          history.push('/home')
        }
        else {
          alert('error')
        }
        // }).catch(err =>{
        //   setInvalidErr(true)
        //   setInvalidErrMsg("entered input is not a valid input")
      })

    }
  })





  return (

    <div className="grid lg:grid-cols-2 sm:grid-cols-2">
      <Toaster
        position="top-center"
        reverseOrder={true}
      />
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
        <h1 className="title-font font-medium text-3xl text-pink">Welcome to the  <Link target={"_blank"}>LeasePe.com</Link> </h1>
                        <p className="leading-relaxed mt-4">
                            India’s leading rental platform brings the latest Furniture to Pune. High-quality Furniture at super affordable Monthly Rates. Choose your Delivery Slot. 24/7 Customer Support. Return Anytime. 72 - Hour Delivery. Easy Customer KYC. Free Relocation. 7 - Day Free Trial.
                        </p>
        </div>
      </div>
      <div className="border border-pink p-3 bg-gray-100">
        <h4 className="text-pink"> Sign Up </h4>
        < form className="w-full max-w-lg" >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Name
              </label>
              <input
                onChange={(e) => {
                  setId(e.target.value)
                }}
                classNameName="form-control" type="hidden" required style={{ width: "400px" }} />

              <input onChange={(e) => {
                setName(e.target.value)
              }} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
              {nameErr && <p className="text-red-500 text-xs italic">{nameErrMsg}</p>}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="email">
                Email
              </label>
              <input onChange={(e) => {
                setEmail(e.target.value)
              }} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
              {emailErr && <p className="text-red-500 text-xs italic">{emailErrMsg}</p>}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                Password
              </label>
              <input onChange={(e) => {
                setPassword(e.target.value)
              }} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******" />
              {pwdError && <p className="text-red-500 text-xs italic">{pwdErrorMsg}</p>}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                Phone
              </label>
              <input onChange={(e) => {
                setPhoneNo(e.target.value)
              }} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="number" placeholder="+91" />
              {phoneErr && <p className="text-red-500 text-xs italic">{phoneErrMsg}</p>}
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                Address
              </label>
              <input onChange={(e) => {
                setAddress(e.target.value)
              }} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="eg: Pune" />
              {addressErr && <p className="text-red-500 text-xs italic">{addressErrMsg}</p>}

            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                Pincode
              </label>
              <input onChange={(e) => {
                setPinCode(e.target.value)
              }} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="number" placeholder="90210" />
              {pinCodeErr && <p className="text-danger">{pinCodeErrMsg}</p>}
            </div>

          </div>
        </form>

        {invalidErr && <p classNameName="text-danger">{invalidErrMsg}</p>}
        <button onClick={signup} className="btn bg-pink text-white mt-3">Register as Customer</button>

        <p className="text-xs text-gray-500 mt-3">
          Already have an  account  ? <Link to="/signin-signup" className="text-pink">Sign In here</Link>
        </p>

        <p className="text-xs text-gray-500 mt-3">
          If you want Register as Seller <Link to="/sellerSignup" className="text-pink">Signup here</Link>
        </p>
      </div>



    </div>



  )
}


export default CustomerSignUp









