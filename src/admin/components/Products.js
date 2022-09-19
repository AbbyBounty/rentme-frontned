import React from "react";
import { useGetCategory, useGetSellers } from '../hooks/index'
import { url } from '../../common/constants'


export const Products = () => {
  const categories = useGetCategory()
  const sellers = useGetSellers()

  return (
    <div className="col-span-3">
      <h2 className="text-indigo-600">All Products</h2>
      <table

        className=" divide-y divide-gray-200 "
      >
        <thead className="bg-gray-100">
          <tr>

            <th className="text-gray-700 uppercase " >
              Id

            </th>
            <th className="text-gray-700 uppercase pl-5">
              Details
            </th>

            <th className="text-gray-700 uppercase pr-3 pl-5">
              Quantity Per Unit
            </th>

            <th className="text-gray-700 uppercase pr-3 pl-5">
              Price
            </th>
            <th className="text-gray-700 uppercase pr-3 pl-5">
              Discount
            </th>
            <th className="text-gray-700 uppercase pr-3 pl-5">
              Rating
            </th>
            <th className="text-gray-700 uppercase pr-3 pl-5">
              Category
            </th>
            <th className="text-gray-700 uppercase pr-3 pl-5">
              Seller
            </th>

          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200">
          {
            categories.length > 0 && categories.map((cat) => {
              return (

                cat.productItem.map((product, index) => {
                  return (





                    <tr key={product.productId}>
                      <td >{product.productId}</td>

                      <td className="px-6 py-4 ">
                        <div className="flex">
                          <div className=" h-10 w-10">
                            <img className=" h-12 w-12 rounded-full" src={url + '/' + product.productImage} alt="" />
                          </div>
                          <div className="ml-5 mt-2">
                            <div className="text-m font-bold text-gray-900">{product.productName}</div>
                          </div>
                        </div>
                      </td>


                      <td className="pl-5">{product.quantityPerUnit}</td>
                      <td className="pl-5">{product.productPrice}/mo</td>
                      <td className="pl-5">{product.productDiscount}</td>
                      <td className="pl-5">{product.productRating}</td>
                      <td className="pl-5">{cat.categoryName}</td>
                      <td className="pl-5">{sellers[index]?.companyName}</td>
                    </tr>


                  )
                }))
            }
            )}

        </tbody>
      </table>

      <a href="/admin" className="text-indigo-600 font-medium hover:text-indigo-500 p-3">Back To DashBoard <span aria-hidden="true"> &rarr;</span></a>

    </div>
  )

}
