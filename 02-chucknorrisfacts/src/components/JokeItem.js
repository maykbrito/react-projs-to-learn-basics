import React from "react"

function JokeItem(props) {
    return (
        <div className="joke-item">
            <p>{props.joke}</p>
        </div>
    )
}

export default JokeItem