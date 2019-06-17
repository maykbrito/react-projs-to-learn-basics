import React from "react"
import Main from "./Main"
import BibleApi from "./BibleApi"

class Bible extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            verse: {
                text: "",
                book: "",
                chapter: "",
                ordinal: "",
                formattedReference: "",
                formattedVerse: ""
            }
        }

        this.bible = new BibleApi()

        this.findAnotherVerse = this.findAnotherVerse.bind(this)
    }

    findAnotherVerse() {
        this.bible.buildRandomVerseFromAPI()
        .then( selectedVerse => this.setState({verse: selectedVerse}) )
        .then(() => this.props.onNewVerseSelected(this.state.verse) )
    }

    componentDidMount() {
        this.findAnotherVerse()
    }

    render() {
        return(
            <Main verse={this.state.verse}/>
        )
    }
}

export default Bible