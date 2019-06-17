import React, { Component } from 'react';
import ProductItem from './ProductItem'
import AddProduct from './AddProduct'
import Header from './Header'


if (!localStorage.getItem('products')) {
  const products = [
      {
      name: 'iPad',
      price: 200
      },
      {
      name: 'iPhone',
      price: 300
      }
  ]

  localStorage.setItem('products', JSON.stringify(products))
}

class App extends Component {

  state = {
    products: JSON.parse(localStorage.getItem('products'))
  }

  componentWillMount() {
    const products = this.getProducts();
    this.setProduts(products)
  }


  // GETTERS - SETTERS
  getProducts = () => this.state.products
  

  setProduts = products => {
    localStorage.setItem('products', JSON.stringify(products))
    this.setState({products})
  }

  onCreate = productDetails => {
    const {name, price} = productDetails
    const products = this.getProducts()

    products.push(
      {
        name: name,
        price: price
      }
    )

    this.setProduts(products)
  }

  
  onUpdate = productDetails => {
    const {name, price, originalName} = productDetails
    let products = this.getProducts()

    products = products.map(product => {
      if(product.name === originalName) {
        product.name = name
        product.price = price
      }

      return product
    })
  
    this.setProduts(products)
  }

  onDelete = name => {
    const products = this.getProducts();
    const filteredProducts = products.filter(product => product.name !== name)

    this.setProduts(filteredProducts)
  } 

  render() {
    return (
      <div className="App">
        <Header title="Crud Products" />
        <main>
          <AddProduct onCreate={this.onCreate} />
          {
            this.state.products.map(product => {
              return (
                  <ProductItem 
                    key={product.name}
                    {...product}
                    onDelete={this.onDelete}
                    onUpdate={this.onUpdate}
                  />
              )
            })
          }
        </main>
      </div>
    );
  }
}

export default App;
