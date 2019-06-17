import React, { Component } from 'react';
import Header from './components/Header'
import  SimpleScrapper  from './services/SimpleScrapper'

class App extends Component {
  state = {
    user: {}
  }
  async componentDidMount() {
    const user = await SimpleScrapper('maykbrito');
    this.setState({ user });
  }
  render() {
    return (
      <Header user={this.state.user}/>
    );
  }
}

export default App;
