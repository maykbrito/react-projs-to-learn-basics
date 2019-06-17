import React from "react"
import "./Actions.css"

class Actions extends React.Component {
    constructor(){
        super()
        this.tweetQuote = this.tweetQuote.bind(this)
    }
    tweetQuote() {
        window.open('http://twitter.com/home?status=' + escape(this.props.verseToTweet), '', 'menubar = no, toolbar = no, resizable = yes, scrollbars = yes, height = 250, width = 800, left = 20, top = 150');
    }
    
    render() {
        return(
        <div className="actions-wrapper">
            <button className="orange" onClick={this.props.pickAnother}>Pick Another</button>
            <button className="blue"onClick={this.tweetQuote}>Tweet</button>
        </div>
        )
    }
}

export default Actions