import React, { Component } from 'react';

class AddProduct extends Component {

    
    handleChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onCreate(this.state)

        this.clearFields()
    }

    clearFields() { 
        document.querySelector('input[name="name"]').value = ""
        document.querySelector('input[name="price"]').value = ""
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h3>Add Product</h3>
                <input 
                    placeholder="name" 
                    name="name"
                    onChange={this.handleChange}
                />
                
                <input 
                    placeholder="price"
                    name="price"
                    onChange={this.handleChange}
                />
                <button>ADD</button>
                <hr/>
            </form>        
        );
    }
}

export default AddProduct;
