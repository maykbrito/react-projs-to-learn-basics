import React from "react"
import {Categories} from "../data"

function CategoryLabel(props) {
    const categoryName = Categories.filter(category => category.id === props.label )
    return (
        <div className="category-label {props.color}">
            <span>{categoryName[0].name}</span>
        </div>
    )
}

export default CategoryLabel