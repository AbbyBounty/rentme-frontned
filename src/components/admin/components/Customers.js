import React, { useState } from "react";
import { useGetCustomers } from '../hooks/index'


 const Customers = () => {
  const customers = useGetCustomers()

  return (
    <>
      {
        customers.length > 0 && (
          <div className="col-span-3 p-3">

            <h1 className="text-indigo-600">All Category</h1>
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
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-m font-large text-gray-500 uppercase tracking-wider"
                  >
                    Email
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-m font-large text-gray-500 uppercase tracking-wider"
                  >
                    Password
                  </th>


                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-m font-large text-gray-500 uppercase tracking-wider"
                  >
                    Contact No
                  </th>


                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-m font-large text-gray-500 uppercase tracking-wider"
                  >
                    Address
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-m font-large text-gray-500 uppercase tracking-wider"
                  >
                    Pin code
                  </th>


                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-m font-large text-gray-500 uppercase tracking-wider"
                  >
                    Role
                  </th>


                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {customers.length > 0 && customers.map((cat) => (
                  <tr key={cat.categoryId}>
                    <td>{cat.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{cat.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{cat.email}</div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{cat.password}</div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{cat.phoneNo}</div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{cat.address}</div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{cat.pinCode}</div>
                    </td>


                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{cat.role}</div>
                    </td>

                  </tr>
                ))}

              </tbody>
            </table>
            <a href="/admin" className="text-indigo-600 font-medium hover:text-indigo-500 p-3">Back To DashBoard <span aria-hidden="true"> &rarr;</span></a>
          </div>
        )
      }
    </>
  )
}



export default  Customers