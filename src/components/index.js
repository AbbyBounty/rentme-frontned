import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Footer from '../components/common/component/Footer';
import Navbar from '../common/component/NavBar';

import { AppRoutes } from './AppRoutes';


export const LeasePeApp = () => {
    return (

        <BrowserRouter>
            <Navbar />

            <AppRoutes />


            <Footer />
        </BrowserRouter>

    )
}
