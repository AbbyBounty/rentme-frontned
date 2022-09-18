
import React from "react";
import { useGetCategory } from '../hooks/index'
import { url } from '../../../common/constants'


export const Categories = () => {
  const categories = useGetCategory()

  return (
    <div>
      {
        categories.length > 0 && (
          <div className="col-span-3 ">

            <h2 className="text-indigo-600">All Category</h2>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-gray-500 uppercase ">
                    Id
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-m font-large text-gray-500 uppercase tracking-wider"
                  >
                    Category Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-m font-large text-gray-500 uppercase tracking-wider"
                  >
                    Category Details
                  </th>



                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {categories.length > 0 && categories.map((cat) => (
                  <tr key={cat.categoryId}>
                    <td>{cat.categoryId}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full" src={url + '/' + cat.categoryImage} alt="cat_img" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{cat.categoryName}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{cat.categoryDescription}</div>
                    </td>


                  </tr>
                ))}

              </tbody>
            </table>
            <a href="/admin" className="text-indigo-600 font-medium hover:text-indigo-500 p-3">Back To DashBoard <span aria-hidden="true"> &rarr;</span></a>
          </div>
        )
      }
    </div>
  )

}