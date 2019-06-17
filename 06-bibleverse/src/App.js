import React, { Component } from 'react';
import Header from "./components/header/Header"
import Actions from "./components/actions/Actions"
import Bible from "./components/bible/Bible"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formattedVerse: ""
    }

    this.pickAnotherVerse = this.pickAnotherVerse.bind(this)
    this.handleNewVersePicked = this.handleNewVersePicked.bind(this)
  }

  pickAnotherVerse() {
    this.refs.bible.findAnotherVerse()
  }

  handleNewVersePicked(newVerse) {
    if (newVerse.formattedVerse !== undefined) {
      this.setState({formattedVerse: newVerse.formattedVerse})
    }
  }

  render() {

    return (
      <div className="App">
        <Header title="Random Verse" />
        <main>
          <Actions
            pickAnother={this.pickAnotherVerse}
            verseToTweet={this.state.formattedVerse} />

          <Bible ref="bible" onNewVerseSelected={this.handleNewVersePicked}/>
        </main>
        <footer>
          <center>@ 2019</center>
        </footer>
      </div>
    );
  }
}

export default App;
