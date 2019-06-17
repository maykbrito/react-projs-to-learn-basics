import React from "react"
import "./Card.css"

class Card extends React.Component {
    render() {
        return(
        <div className="card-wrapper">
            <div className="card-content">
              {this.props.children}
            </div>
        </div>
        )
    }
}

export default Card