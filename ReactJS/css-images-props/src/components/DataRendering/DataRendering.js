import React, { useState } from 'react'

const DataRendering = () => {
    const [products, setProducts] = useState([
        {
            name: "Mac",
            price: 120,
            desc: "Best goods ever",
            id: 1
        },
        {
            name: "iPhone",
            price: 300,
            desc: "Best iphone ever",
            id: 2
        },
        {
            name: "Mic",
            price: 12,
            desc: "Best Mic ever",
            id: 3
        },
    ])

    console.log(products);
    return (
        <div>
            <h1>Data Rendering</h1>
            {products.map((product) => {
                console.log(product);
                return (
                    <div key={product.id}>
                        <h1>{product.name}</h1>
                        <p>{product.desc}</p>
                        <p>${product.price}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default DataRendering