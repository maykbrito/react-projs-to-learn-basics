import React from "react"
import Header from "./components/Header"
import Product from "./components/Product"
import { products } from "./data"

function App() {
    const productComponents = products.map(product => <Product 
        product={product}
        key={product.id}
    />)

    return (
        <div>
            <Header title="Products" />
            <div className="container list">
                {productComponents}
            </div>
        </div>
    )
}

export default App