import React from "react"
import CategoryLabel from "./CategoryLabel"

function Item(props) {
    
    return (
        <div className="item">
            <p>{props.content} </p>
            <CategoryLabel label={props.category} />
        </div>
    )
}

export default Item