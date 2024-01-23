import React from 'react'
import { useParams } from 'react-router-dom'
import "./Product.css"
import products from "../data/productData"

const Product = () => {
    const { id } = useParams()
    console.log(id);
    const product = products.find(product => product.id === +id)
    console.log(product);
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Product Details</h1>
            <div className='products-container'>
                <div key={product.id} className='product-item'>
                    <h2>{product.name}</h2>
                    <img src={product.image} alt={product.name} />
                    <p>{product.description}</p>
                    <p className='price'>${product.price}</p>
                </div>
            </div>
        </div>
    )
}

export default Product