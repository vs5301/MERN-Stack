import React from 'react'
import { Link } from "react-router-dom"
import products from "../data/productData"
import "./Product.css"

const Products = () => {
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>List of Products</h1>
            <div className="products-container">
                {products.map(product => (
                    <div key={product.id} className="product-item">
                        <h2>{product.name}</h2>
                        <img src={product.image} alt={product.name} />
                        <p>{product.description}</p>
                        <p className="price">${product.price}</p>
                        <Link to={`/products/${product.id}`}>
                            <button>View</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products