import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCartAction } from '../actions/cartActions'
import { url } from '../common/constants'
const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
  }, [])
  const getProducts = () => {
    axios.get(url + '/products/').then((response) => {
      const result = response.data
      setProducts(result)
    })
  }
  // used to send action(s)
  const dispatch = useDispatch()

  const addToCart = (product) => {
    dispatch(addToCartAction(product))
  }

  return (
    <div>
    
      <h1>Products</h1>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>price</th>
            <th>#</th>
            <th>action</th>

          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr>
                <td>{product.productId}</td>
                <td>{product.productName}</td>
                <td>{product.productPrice}</td>
                <td> <img src={url + '/' + product.productImage} alt="" class="rounded" /></td>
                <td>
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => {
                      addToCart(product)
                    }}>
                    Add To Cart
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Products
