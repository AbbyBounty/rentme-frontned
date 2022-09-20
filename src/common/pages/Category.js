import React from 'react'
import axios from 'axios'

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { url } from '../constants'
import { useHistory, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCartAction } from '../../actions/cartActions'
import { removeFromCartAction } from '../../actions/cartActions'


import toast, { Toaster } from 'react-hot-toast';


const Category = () => {
  const history = useHistory()
  const [category, setCategory] = useState([])
  const [products, setProducts] = useState([])
  const [month, setMonth] = useState(1)
  const userSignIn = useSelector((state) => state?.userSignIn)

  useEffect(() => {
    getCategory()
  }, [])

  const [count, setCount] = useState(0);

  const location = useLocation()
  const cat = location.state.cat;

  const getCategory = () => {
    axios.post(url + `/category/${cat.categoryName}`).then((response) => {
      const result = response.data
      setCategory(result)
    })
  }

  const dispatch = useDispatch()

  const addToCart = (product, month) => {
    product = { ...product, month }
    
    dispatch(addToCartAction(product))
    toast.success(`${product.productName} added to cart `)

    setCount(count + 1)
  }

  const removeFromCart = (product) => {
    dispatch(removeFromCartAction(product))
    toast.error(`${product.productName} removed from cart `)

  }

  const handleChange = (e) => {
    setMonth(e.target.value)
    console.log("🚀 ~ file: Category.js ~ line 55 ~ handleChange ~ e.target.value", e.target.value)
  }


  return (


    < div className="bg-white" >
      <div className="max-w-2xl mx-auto   lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">{category}</h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {cat.productItem.map((product) => (
            <div key={product.id} className="group relative">
              <div className=" flex justify-between">

                <h6 className=" font-medium text-grey-700">{product.productName} </h6>
              </div>
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={url + '/' + product.productImage}
                  alt="product_img"
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-2 flex justify-between  ">

                <p className="text-sm font-medium text-gray-500 " style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}> {product.productDescription}</p>
              </div>
              <div className=" flex mt-0 justify-between">

                <p className="text-sm font-medium text-gray-400 line-through">Starts at: ₹{product.productPrice * 2}/mo</p>
                <p className="text-sm font-medium text-gray-900">Starts at: ₹{product.productPrice}/mo</p>
              </div>
              <div className='mt-2 flex justify-between'>
                <div className="text-m font-medium text-gray-900">Select Tenure :</div>

                <div className="relative ">
                  <select onChange={handleChange} className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                    <option value={1}>1 month</option>
                    <option value={3}>3 months</option>
                    <option value={6}>6 months</option>
                    <option value={9}>9 months</option>
                    <option value={12}>12 months</option>
                  </select>
                </div>
              </div>


              {Object.keys(userSignIn).length !== 0 && userSignIn[0]?.role!=="SELLER" ?
                <button
                  className="btn btn-success btn-sm mt-2 p-2 w-full lg:max-w-sm"
                  onClick={() => {
                    addToCart(product, month)

                  }}>
                  Add to cart

                </button>
                :

                <div>

                  <button
                    className="btn btn-success btn-sm mt-2 p-2 w-full lg:max-w-sm disabled"
                    onClick={() => {
                      addToCart(product, month)

                    }}>
                    Add to cart

                  </button>
                  <p className="text-sm font-medium text-gray-400 ">Please login as customer to continue</p>
                </div>
              }


            </div>
          ))}
        </div>
      </div>
    </div >


  )

}

export default Category













