import React from "react"
import Item from "./Item"
import { Copies } from "../data"

function Main() {
    let singleItemFromCopiesCollection = [];
    
    Copies.map( itemFromCopies => {
        return itemFromCopies.items.map(singleItem => singleItemFromCopiesCollection.push(
            <Item 
                key={`${singleItem.id}-${singleItem.content}`} 
                content={singleItem.content}
                category={itemFromCopies.category} />
            )
        )
    })
    
    return (
        <main>
            <div className="container list">
                {singleItemFromCopiesCollection}
            </div>
        </main>
    )
}

export default Main