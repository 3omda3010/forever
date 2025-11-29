import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { ShopContext } from '../context/ShopContext'

const Product = () => {

  const {productId} = useParams()
  const {products} = useContext(ShopContext)

  return (
    <div>
      
    </div>
  )
}

export default Product
