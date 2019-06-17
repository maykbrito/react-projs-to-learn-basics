import React, {Component} from "react"
import Presenter from "./presenter"
import Api from "../../services/api"

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    async componentDidMount() {
        const allMemeImgs = await Api()
        this.setState({ allMemeImgs })
    }
    
    handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }
    
    handleSubmit(event) {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum].url
        this.setState({ randomImg: randMemeImg })
    }
    
    render() {
        return (
            <Presenter 
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                topText = {this.state.topText}
                bottomText = {this.state.bottomText}
                randomImg = {this.state.randomImg}
            />
        )
    }
}

export default MemeGenerator