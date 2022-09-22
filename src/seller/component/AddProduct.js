import { useState } from 'react';
import { url } from '../../common/constants';
import axios from 'axios';
import { useSelector } from 'react-redux';


const AddProduct = () => {

    const [productId, setProductId] = useState(0);
    const [category, setCategory] = useState(0);
    const [seller, setSeller] = useState(0)
    const [productName, setProductName] = useState('')
    const [productDescription, setProductDescription] = useState('')
    const [quantityPerUnit, setQuantityPerUnit] = useState(0)
    const [productPrice, setProductPrice] = useState(0)
    const [productDiscount, setProductDiscount] = useState(0)
    const [productRating, setProductRating] = useState(0)
    const [productImage, setProductImage] = useState(undefined)





    const userSignIn = useSelector(state => state?.userSignIn)

    console.log(sessionStorage.getItem('seller'))

    const product = (() => {
        const body = new FormData();

        body.append("productId", productId);
        body.append("productName", productName);
        body.append("productDescription", productDescription);
        body.append("quantityPerUnit", quantityPerUnit);
        body.append("productPrice", productPrice);
        body.append("productDiscount", productDiscount);
        body.append("productRating", productRating);
        body.append("productImage", productImage);
        body.append("category", category);
        body.append("sellerId", userSignIn[0]?.sellerId);
  


        axios.post(url + `/products/image`, body).then(response => {
            const result = response.data;

            console.log(result)
            if (result) {
                alert('succcess')

            }

            else {
                alert('error')
            }
        })
    })


    return (
        <div className="grid grid-cols-4">


            <div className="col-span-3 ">

                <h2 className="text-indigo-600">Add Product</h2>


                <div className="grid lg:grid-cols-2 gap-x-2 sm:grid-cols-1">

                    <div>
                        Category Id: <input
                            onChange={(e) => {
                                setCategory(e.target.value)
                            }}
                            className="appearance-none block w-full bg-white-100 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-pink-50" type="text" required />


                        <input className="form-control" type="hidden" required style={{ width: "400px" }}
                            onChange={(e) => {
                                setSeller(e.target.value)

                            }} />

                        <input
                            onChange={(e) => {
                                setProductId(e.target.value)

                            }}
                            className="appearance-none block w-full bg-white-100 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-pink-50" type="hidden" required style={{ width: "400px" }} />

                    </div>
                    <div>
                        Product Name: <input
                            onChange={(e) => {
                                setProductName(e.target.value)
                            }}
                            className="appearance-none block w-full bg-white-100 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-pink-50" type="text" required style={{ width: "400px" }} />

                    </div>
                    <div>
                        Product Description: <input
                            onChange={(e) => {
                                setProductDescription(e.target.value)
                            }}
                            className="appearance-none block w-full bg-white-100 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-pink-50" type="text" required style={{ width: "400px" }} />

                    </div>
                    <div>
                        Quantity Per Unit: <input
                            onChange={(e) => {
                                setQuantityPerUnit(e.target.value)
                            }}
                            className="appearance-none block w-full bg-white-100 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-pink-50" type="text" required style={{ width: "400px" }} />

                    </div>
                    <div>
                        Rent Per Month: <input
                            onChange={(e) => {
                                setProductPrice(e.target.value)
                            }}
                            className="appearance-none block w-full bg-white-100 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-pink-50" type="text" required style={{ width: "400px" }} />

                    </div>
                    <div>
                        Product Discount: <input
                            onChange={(e) => {
                                setProductDiscount(e.target.value)
                            }}
                            className="appearance-none block w-full bg-white-100 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-pink-50" type="text" required style={{ width: "400px" }} />

                    </div>

                    <div>

                        Product Rating: <input
                            onChange={(e) => {
                                setProductRating(e.target.value)
                            }}
                            className="appearance-none block w-full bg-white-100 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-pink-50" type="text" required style={{ width: "400px" }} />

                    </div>
                    <div>
                        Product Image: <input
                            onChange={(e) => {
                                setProductImage(e.target.files[0])
                            }}
                            className="appearance-none block w-full bg-white-100 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-pink-50" type="file" required style={{ width: "400px" }} />


                    </div>


                    <div>


                        <button onClick={product} className="btn btn-success">Add Product</button>{'   '}{'   '}{'  '}{'  '}
                        <a href="/sellerDashboard" className="text-indigo-600 font-medium hover:text-indigo-500 p-3">Back To DashBoard <span aria-hidden="true"> &rarr;</span></a>


                    </div>
                </div>



            </div>
        </div>
    )
}
export default AddProduct