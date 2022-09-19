import React, { useEffect } from 'react'
import axios from 'axios'
import { url } from '../../common/constants'



export const useGetCategory = () => {

    const [category, setCategory] = React.useState([])


    useEffect(() => {
        getCategory()
    }, [])

    const getCategory = () => {
        axios.get(url + '/category/').then((response) => {
            const result = response.data

            setCategory(result)

        })
    }
    return category
}



export const useGetSellers = () => {

    const [sellers, setSellers] = React.useState([])


    useEffect(() => {
        getSellers()
    }, [])

    const getSellers = () => {
        axios.get(url + '/seller/').then((response) => {
            const result = response.data
            setSellers(result)

        })
    }
    return sellers
}


export const useGetCustomers = () => {

    const [customers, setCustomers] = React.useState([])


    useEffect(() => {
        getCustomers()
    }, [])

    const getCustomers = () => {
        axios.get(url + '/admin/customers/').then((response) => {
            const result = response.data
            console.log("🚀 ~ file: index.js ~ line 61 ~ axios.get ~ result", result)

            setCustomers(result)

        })
    }
    return customers
}

