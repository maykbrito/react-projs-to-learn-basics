import React from "react"

class Verse extends React.Component {
    render() {
        return(
            <div className="verse">
                <h1>{this.props.text}</h1>
                <p>{this.props.reference}</p>
            </div>
        )
    }
}

export default Verse