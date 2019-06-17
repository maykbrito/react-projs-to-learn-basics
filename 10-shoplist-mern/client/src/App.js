import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarApp from './components/NavbarApp'
import ShoppingList from './components/ShoppingList/Index'
import { Provider } from 'react-redux'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <NavbarApp/>
        <ShoppingList/>
      </div>
      </Provider>
    );
  }
}

export default App