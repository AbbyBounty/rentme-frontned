import axios from 'axios';
import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { emailurl, url } from '../../../common/constants';
import { validCompanyEmail, validCompanyName, validcompanyPhone, validPassword } from '../../../common/Regex';
import toast, { Toaster } from 'react-hot-toast';


const SellerSignUp = () => {

  const [sellerId, setSellerId] = useState(0)
  const [companyName, setCompanyName] = useState('')
  const [companyEmail, setCompanyEmail] = useState('')
  const [password, setPassword] = useState('')
  const [companyPhone, setCompanyPhone] = useState('')
  const [companyAddress, setCompanyAddress] = useState('')
  const [gstin, setGstin] = useState('')
  // const [role, setRole] = useState('')xw


  const [companyNameErr, setCompanyNameErr] = useState(false)
  const [companyNameErrMsg, setCompanyNameErrMsg] = useState('')
  const [companyEmailErr, setCompanyEmailErr] = useState(false)
  const [companyEmailErrMsg, setCompanyEmailErrMsg] = useState('')
  const [passwordErr, setPasswordErr] = useState(false)
  const [passwordErrMsg, setPasswordErrMsg] = useState('')
  const [companyPhoneErr, setCompanyPhoneErr] = useState(false)
  const [companyPhoneErrMsg, setCompanyPhoneErrMsg] = useState('')
  const [companyAddressErr, setCompanyAddressErr] = useState(false)
  const [companyAddressErrMsg, setCompanyAddressErrMsg] = useState('')
  const [gstinErr, setGstinErr] = useState(false)
  const [gstinErrMsg, setGstinErrMsg] = useState('')




  const history = useHistory()




  const sellerSignUp = (() => {

    setCompanyNameErr(false)
    setCompanyEmailErr(false)
    setPasswordErr(false);
    setCompanyPhoneErr(false);
    setCompanyAddressErr(false)
    setGstinErr(false);

    if (companyName.length == 0) {
      setCompanyNameErr(true)
      toast.error('fix error')

      setCompanyNameErrMsg("Enter Company Name")
    }

    else if (!validCompanyName.test(companyName)) {
      setCompanyNameErr(true)
      toast.error('fix error')

      setCompanyNameErrMsg("Enter valid Company Name")
    }

    else if (companyEmail.length == 0) {
      setCompanyEmailErr(true)
      toast.error('fix error')

      setCompanyEmailErrMsg("Enter Company Email")
    }
    else if (!validCompanyEmail.test(companyEmail)) {
      setCompanyEmailErr(true)
      toast.error('fix error')

      setCompanyEmailErrMsg("Enter valid Company Email")
    }
    else if (password.length == 0) {
      setPasswordErr(true);
      toast.error('fix error')

      setPasswordErrMsg("enter password")
    }
    else if (!validPassword.test(password)) {
      setPasswordErr(true);
      toast.error('fix error')

      setPasswordErrMsg("Your password is not strong enough")
    }
    else if (companyPhone.length == 0) {
      setCompanyPhoneErr(true);
      toast.error('fix error')

      setCompanyPhoneErrMsg("Enter phone number")
    }
    else if (!validcompanyPhone.test(companyPhone)) {
      setCompanyPhoneErr(true);
      toast.error('fix error')

      setCompanyPhoneErrMsg("Enter valid phone number")
    }

    else if (companyAddress.length == 0) {
      setCompanyAddressErr(true)
      toast.error('fix error')

      setCompanyAddressErrMsg("Enter Address")
    }

    else if (gstin.length == 0) {
      setGstinErr(true);
      toast.error('fix error')

      setGstinErrMsg(" Enter GSTIN Number")
    }



    else {
      const body = { sellerId: sellerId, companyName: companyName, companyEmail: companyEmail, password: password, companyPhone: companyPhone, companyAddress: companyAddress, gstin: gstin }


      axios.post(url + `/seller/signup`, body).then(response => {
        const result = response.data;
        console.log("🚀 ~ file: SignUpSeller.js ~ line 125 ~ axios.post ~ result", result)
        if (result) {
          axios.post(emailurl + `/send-mail/?email=${companyEmail}`).then(response => {
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

          history.push('/sellerSignin')
        }
        else {
          alert('error')
        }
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
            <input
              onChange={(e) => {
                setSellerId(e.target.value)
              }}
              className="form-control" type="hidden" required style={{ width: "400px" }} />


            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Seller Name
              </label>

              <input
                onChange={(e) => {
                  setCompanyName(e.target.value)
                }} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
              {companyNameErr && <p className="text-red-500 text-xs italic">{companyNameErrMsg}</p>}
            </div>


            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="email">
                Seller Email
              </label>
              <input
                onChange={(e) => {
                  setCompanyEmail(e.target.value)
                }} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="google@gmail.com" />
              {companyEmailErr && <p className="text-red-500 text-xs italic">{companyEmailErrMsg}</p>}
            </div>
          </div>


          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                Password
              </label>
              <input onChange={(e) => {
                setPassword(e.target.value)
              }} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
              {passwordErr && <p className="ext-red-500 text-xs italic">{passwordErrMsg}</p>}
            </div>
          </div>


          <div className="flex flex-wrap -mx-3 mb-3">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                Seller Phone
              </label>
              <input
                onChange={(e) => {
                  setCompanyPhone(e.target.value)
                }} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="number" placeholder="+91" />
              {companyPhoneErr && <p className="text-danger text-xs italic">{companyPhoneErrMsg}</p>}
            </div>

            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                Seller Address
              </label>
              <input onChange={(e) => {
                setCompanyAddress(e.target.value)
              }} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="eg: Pune" />
              {companyAddressErr && <p className="text-danger text-xs italic">{companyAddressErrMsg}</p>}

            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                PIN code
              </label>
              <input onChange={(e) => {
                setGstin(e.target.value)
              }} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="number" placeholder="415501" />
              {gstinErr && <p className="text-danger text-xs italic">{gstinErrMsg}</p>}
            </div>

          </div>
        </form>


        <button onClick={sellerSignUp} className="btn bg-pink text-white mt-3">Register as Seller</button>

        <p className="text-xs text-gray-500 mt-3">
          Already have an  account  ? <Link to="/signin-signup" className="text-pink">Sign In here</Link>
        </p>

        <p className="text-xs text-gray-500 mt-3">
          If you want Register as Custmor <Link to="/signup" className="text-pink">Signup here</Link>
        </p>
      </div>
    </div>


  )
}


export default SellerSignUp

























// import { useState } from 'react';
// import { emailurl, url } from '../common/constants';
// import axios from 'axios';
// import { useHistory, useLocation } from 'react-router-dom'
// import web1 from './gifs/basket.gif'
// import { validCompanyEmail, validCompanyName, validcompanyPhone, validGstin, validPassword } from '../common/Regex';


// const SellerSignUp = () => {

//   const [sellerId, setSellerId] = useState(0)
//   const [companyName, setCompanyName] = useState('')
//   const [companyEmail, setCompanyEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [companyPhone, setCompanyPhone] = useState('')
//   const [companyAddress, setCompanyAddress] = useState('')
//   const [gstin, setGstin] = useState('')
//   // const [role, setRole] = useState('')


//   const [companyNameErr, setCompanyNameErr] = useState(false)
//   const [companyNameErrMsg, setCompanyNameErrMsg] = useState('')
//   const [companyEmailErr, setCompanyEmailErr] = useState(false)
//   const [companyEmailErrMsg, setCompanyEmailErrMsg] = useState('')
//   const [passwordErr, setPasswordErr] = useState(false)
//   const [passwordErrMsg, setPasswordErrMsg] = useState('')
//   const [companyPhoneErr, setCompanyPhoneErr] = useState(false)
//   const [companyPhoneErrMsg, setCompanyPhoneErrMsg] = useState('')
//   const [companyAddressErr, setCompanyAddressErr] = useState(false)
//   const [companyAddressErrMsg, setCompanyAddressErrMsg] = useState('')
//   const [gstinErr, setGstinErr] = useState(false)
//   const [gstinErrMsg, setGstinErrMsg] = useState('')




//   const history = useHistory()

//   // function handleSubmit(e) {
//   //   e.preventDefault();
//   //   //console.log(email, password);
//   //   // clearing the values
//   //   // setEmail("");
//   //   // setPassword("");

//   //   console.log(this.email.value);

//   //   // clearing the values
//   //   this.email.value = "";

//   // };



//   const sellerSignUp = (() => {

//     if (companyName.length == 0) {
//       setCompanyNameErr(true)
//       setCompanyNameErrMsg("Enter Company Name")
//     }

//     else if (!validCompanyName.test(companyName)) {
//       setCompanyNameErr(true)
//       setCompanyNameErrMsg("Enter valid Company Name")
//     }

//     else if (companyEmail.length == 0) {
//       setCompanyEmailErr(true)
//       setCompanyEmailErrMsg("Enter Company Email")
//     }
//     else if (!validCompanyEmail.test(companyEmail)) {
//       setCompanyEmailErr(true)
//       setCompanyEmailErrMsg("Enter valid Company Email")
//     }
//     else if (password.length == 0) {
//       setPasswordErr(true);
//       setPasswordErrMsg("enter password")
//     }
//     else if (!validPassword.test(password)) {
//       setPasswordErr(true);
//       setPasswordErrMsg("Your password is not strong enough")
//     }
//     else if (companyPhone.length == 0) {
//       setCompanyPhoneErr(true);
//       setCompanyPhoneErrMsg("Enter phone number")
//     }
//     else if (!validcompanyPhone.test(companyPhone)) {
//       setCompanyPhoneErr(true);
//       setCompanyPhoneErrMsg("Enter valid phone number")
//     }

//     else if (companyAddress.length == 0) {
//       setCompanyAddressErr(true)
//       setCompanyAddressErrMsg("Enter Address")
//     }

//     else if (gstin.length == 0) {
//       setGstinErr(true);
//       setGstinErrMsg(" Enter GSTIN Number")
//     }

//     else if (!validGstin.test(gstin)) {
//       setGstinErr(true);
//       setGstinErrMsg(" Enter valid GSTIN Number")
//     }

//     else {
//       const body = { sellerId: sellerId, companyName: companyName, companyEmail: companyEmail, password: password, companyPhone: companyPhone, companyAddress: companyAddress, gstin: gstin }

//       console.log("body :" + body)

//       axios.post(url + `/seller/signup`, body).then(response => {
//         const result = response.data;
//         if (result) {
//           alert('succcess')
//           console.log(result)
//           //history.push('/sellerSignin')
//         }
//         else {
//           alert('error')
//         }
//       })


//       axios.post(emailurl + `/send-email/${companyEmail}`).then(response => {
//         const result = response.data;
//         if (result) {
//           alert('email sent successfully ! ')
//           console.log(result)
//         }
//         else {
//           alert('error')
//         }
//       })
//     }

//   })
//     //  axios.get(emailurl +`/send-email`).then(response =>{
//     //     const result=response.data;
//     //     if(result){
//     //       alert('succcess')
//     //       console.log(result)
//     //     }
//     //     else {
//     //       alert('error')
//     //     }
//     //   })





  //   return (

  //     <div div className="container-fluid">
  //       <div className="row">
  //         <div className="customer_border col-lg-5 col-sm-12 border-end border-4 p-5">
  //           <h1>SignUp</h1>
  //           <input
  //             onChange={(e) => {
  //               setSellerId(e.target.value)
  //             }}
  //             className="form-control" type="hidden" required style={{ width: "400px" }} />

  //           Company Name: <input
  //             onChange={(e) => {
  //               setCompanyName(e.target.value)
  //             }}
  //             className="form-control" type="text" required style={{ width: "400px" }} />

  //           Comapny Email: <input
  //             onChange={(e) => {
  //               setCompanyEmail(e.target.value)
  //             }}
  //             className="form-control" type="text" required style={{ width: "400px" }} />

  //           password: <input
  //             onChange={(e) => {
  //               setPassword(e.target.value)
  //             }}
  //             className="form-control" type="password" required style={{ width: "400px" }} />

  //           Phone Number: <input
  //             onChange={(e) => {
  //               setCompanyPhone(e.target.value)
  //             }}
  //             className="form-control" type="text" required style={{ width: "400px" }} />

  //           company Address: <input
  //             onChange={(e) => {
  //               setCompanyAddress(e.target.value)
  //             }}
  //             className="form-control" type="text" required style={{ width: "400px" }} />

  //           GSTIN: <input
  //             onChange={(e) => {
  //               setGstin(e.target.value)
  //             }}
  //             className="form-control" type="text" required style={{ width: "400px" }} />

  //           <br />


  //           <br />

  //           <br />
  //           <button onClick={sellerSignUp} className="btn btn-success">Signup</button>


  //         </div>
  //         <div className="col-lg-7" >
  //           <img src={web1} alt="web" style={{ paddingLeft: "200px" }} />
  //           <br />
  //           <blockquote className="blockquote mb-0" style={{ paddingLeft: "100px" }}>
  //             <p className="text-center" >
  //               {' '}
  //               <h2><i> Whoever said money can't buy happiness simply didn't know where to go shopping.</i></h2> {' '}
  //             </p>

  //           </blockquote>
  //         </div>



  //       </div>
  //     </div>


  //   )
  // }


// export default SellerSignUp