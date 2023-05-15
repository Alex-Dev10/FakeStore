import axios from 'axios'
import React from 'react'

import { useState, useEffect } from 'react'
import { CardProduct } from './CardProduct'
import './Products'

export const Products = () => {

    const [Products, setProducts] = useState([])

const productsList=()=> axios.get('https://fakestoreapi.com/products')
                    .then(response =>{
                      setProducts(response.data);
                    
                                            })


useEffect(() => {
  productsList()


  
}, [])



  return (
    <div className='cardContainer' >


{Products.map(product=>(<CardProduct  product={product}  />))}



    </div>
  )
}
