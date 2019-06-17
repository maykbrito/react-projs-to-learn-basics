import React from "react"
import Card from "../card/Card"
import Verse from "./Verse"

class Main extends React.Component {
    render() {
        return(
        <div className="bible-wrapper">
            <Card>
                <Verse 
                text={this.props.verse.text} 
                reference={this.props.verse.formattedReference} />
            </Card>
        </div>
        )
    }
}

export default Main