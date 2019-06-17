import React from "react"
import JokeItem from "./JokeItem"
import Api from "../services/api"

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            joke: ""
        }
        
        this.handleButton = this.handleButton.bind(this)
    }
    
    componentDidMount(){
        this.pickAJoke()
    }
    
    async pickAJoke() {
        const joke = await Api()
        this.setState({joke})
    }
    
    handleButton() {
        this.pickAJoke()
    }
    
    render() {
        return (
            <main>
                <div className="container joke-list">
                    <button onClick={this.handleButton}>Show Another</button>
                    <JokeItem 
                        joke={this.state.joke} />
                </div>
            </main>
        )
    }
}

export default Main