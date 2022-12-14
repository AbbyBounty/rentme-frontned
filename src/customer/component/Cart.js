
import { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { useDispatch, useSelector } from 'react-redux'
import { addToCartAction1, addToCartAction, removeFromCartAction } from '../../actions/cartActions'
import { url } from '../../common/constants'
import { CartProvider, useCart } from "react-use-cart";
import { Link, useHistory } from 'react-router-dom'
import CategoryList from '../../common/component/Categorylist'






export const Cart = () => {
  const [open, setOpen] = useState(true)

  const cartItems = useSelector((state) => state.cartItems)
  const dispatch = useDispatch()
  const history = useHistory()
  const [cartTotal, setCartTotal] = useState(0);


  const removeFromCart = (product) => {
    dispatch(removeFromCartAction(product))
  }
  const addToCart = (product) => {
    dispatch(addToCartAction(product))
  }



  const addOrder = (product) => {
    console.log("🚀 ~ file: Cart.js ~ line 36 ~ addOrder ~ product", product)
    setOpen(false)
    
    history.push('/order')
  }
  const updateItemQuantity = useCart();





  useEffect(() => {
    total();
  }, [cartItems]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cartItems.length; i++) {
      totalVal += cartItems[i].productPrice * cartItems[i].month;
    }
    setCartTotal(totalVal);
    console.log(totalVal)
  };



  return (



    <div>

      <Transition.Root show={open} as={Fragment} style={{ position: "absolute", "z-index": "4" }}>


        <Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={setOpen}>
          <div className="absolute inset-0 overflow-hidden">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="w-screen max-w-md">
                  <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                    {cartItems?.length > 0 &&
                      <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
                          <div className="ml-3 h-7 flex items-center">
                            <button
                              type="button"
                              className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>

                        <div className="mt-8">
                          <div className="flow-root">
                            <ul role="list" className="-my-6 divide-y divide-gray-200">
                              {cartItems.map((product) => (
                                <li key={product.id} className="py-6 flex">
                                  <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                    <img
                                      src={url + '/' + product.productImage}
                                      alt="product_img"
                                      className="w-full h-full object-center object-cover"
                                    />
                                  </div>

                                  <div className="ml-4 flex-1 flex flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h5>
                                          <a href={product.href}>{product.productName}</a>
                                        </h5>
                                        <p className="ml-4">{product.productPrice} x {product.month}</p>
                                      </div>
                                      <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                    </div>
                                    <div className="flex-1 flex items-end justify-between text-sm">
                                      <p className="text-gray-500">Tenure : {product.month} Months</p>

                                      <div className="flex">
                                        <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={() => {
                                          removeFromCart(product)
                                        }}>
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    }


                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      {cartItems?.length > 0 ?
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <p>Subtotal</p>
                            <p>₹{cartTotal}</p>
                          </div>
                          <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                          <div className="mt-6">
                            <button
                              onClick={addOrder}
                              className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green hover:bg-indigo-700"
                            >
                              Checkout
                            </button>
                          </div>
                        </div>
                        : <div className="pt-5 mt-6 flex justify-center">

                          <h4 className='text-indigo-600 font-medium '>
                            oh 🤦🏻‍♂️ !! your Cart is empty
                          </h4>
                        </div>
                      }
                      <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                        <p>

                          <button
                            type="button"
                            className="text-indigo-600 font-medium hover:text-indigo-500"
                            onClick={() => setOpen(false)}
                          >
                            Continue Shopping<span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </Transition.Child>
            </div>
          </div>
        </Dialog >
      </Transition.Root >

    </div >

  )
}
