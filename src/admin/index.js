
import React from "react";
import { AdminMenu } from "./components/AdminMenu";
import Customers from './components/Customers'
import { Products } from './components/Products'
import { Categories } from './components/Categories'


const AdminDashBoard = () => {

    const [section, setSection] = React.useState("")
    console.log("🚀 ~ file: index.js ~ line 12 ~ AdminDashBoard ~ section", section)

    return (
        <div className="grid grid-cols-6 gap-6">

            <div className="col-span-1">

                <AdminMenu setSection={setSection} />
            </div>
            <div className="col-span-5 ">

                {section == "category" && <Categories />}
                {section == "product" && <Products />}
                {section == "customer" && <Customers />}


            </div>



        </div>
    );
};

export default AdminDashBoard;
