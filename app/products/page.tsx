import React from 'react'
import { ComplexProducts } from '../types'
import Footer from '../components/Footer'

const Products = async() => {
    const data =await fetch('https://dummyjson.com/products')
    const products = await data.json()

    const convProducts:ComplexProducts[] = products.products
  return (
    <div>
        
        <h1 className='text-2xl font-bold'>Product List</h1>
        {
            convProducts.map((prod, idx)=>(
                <h1 key={idx}>{idx+1}. {prod.title}</h1>
            ))
        }
        
        
        
        <Footer/>
        
        </div>
  )
}

export default Products