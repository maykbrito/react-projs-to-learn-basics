import React from "react"

function Product(props) {
    return (
        <div className="item">
            <h1>{props.product.name}</h1>
            <p>{props.product.description}</p>
            <p><small>{props.product.price.toLocaleString('pt-BR', {style:"currency", currency:"BRL"})}</small></p>
        </div>
    )
}

export default Product