import React from 'react'
import SellerMenuBar from './component/SellerMenuBar'
import toast, { Toaster } from 'react-hot-toast';
import AddProduct from './component/AddProduct';
import { Dashboard } from './component/Dashboard';
import { AddCategory } from './component/AddCategory';
import { Products } from '../admin/components/Products';
import { Categories } from '../admin/components/Categories';

const SellerDashboard = () => {

    const [section, setSection] = React.useState("")


  

    return (



        <div className="grid grid-cols-6 gap-6">

            <div className="col-span-1">

                <SellerMenuBar setSection={setSection} />

            </div>
            <div className="col-span-5">

                {section == "dashboard" && <Dashboard />}
                {section == "addProduct" && <AddProduct />}
                {section == "addCategory" && <AddCategory />}
                {section == "product" && <Products />}
                {section == "category" && <Categories />}

            </div>



        </div>




    )
}
export default SellerDashboard
