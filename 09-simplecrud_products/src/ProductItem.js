import React, { Component } from 'react';

class ProductItem extends Component {

    state = {
        isEdit: false
    }

    onEdit = () => {
        this.setState({isEdit: true})
    }
    
    onDelete = () => {
        const {onDelete, name} = this.props
        onDelete(name)
    }


    onEditSubmit = (event) => {
        event.preventDefault();
        const {onUpdate} = this.props

        onUpdate({
            name: this.nameInput.value, 
            price: this.priceInput.value, 
            originalName: this.props.name
        })

        this.setState({isEdit:false})
    }


    render() {
        const {name, price} = this.props
        return (
            <div>
                {
                    this.state.isEdit ? 
                    (
                        <form onSubmit={this.onEditSubmit}>
                            <input 
                                placeholder="name" 
                                name="name"
                                defaultValue={name}
                                ref={nameInput => this.nameInput = nameInput}
                            />
                            
                            <input 
                                placeholder="price"
                                name="price"
                                defaultValue={price}
                                ref={priceInput => this.priceInput = priceInput}

                            />
                            <button>SAVE</button>
                        </form>
                    ) 
                    : (
                        <div>
                            <span>{name} </span>
                            {` | `} 
                            <span>{price}</span>
                            {` | `}
                            <button onClick={this.onEdit}>EDIT</button>
                            <button onClick={this.onDelete}>DELETE</button>
                        </div>
                    )
                }
                
            </div>
    );
  }
}

export default ProductItem;
