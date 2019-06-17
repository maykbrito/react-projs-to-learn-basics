import React, { Component } from 'react'
import ShoppingListPresenter from './Presenter'
import {connect} from 'react-redux'
import { getItems, deleteItem, addItem} from '../../actions/itemActions'
import PropTypes from 'prop-types'


class ShoppingList extends Component {

    componentDidMount() {
        this.props.getItems()
    }

    handleAdd() {
        const name = prompt('Enter Item')
        if (name)
            this.props.addItem({name:name})
            
    }

    handleDelete(event){
        const {id} = event.target
        this.props.deleteItem(id)
    }

    render () {
        const {items} = this.props.item

        return (
        <ShoppingListPresenter
            items={items}
            handleAdd={this.handleAdd.bind(this)}
            handleDelete={this.handleDelete.bind(this)}
        />
        )
    }
}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
})

export default connect(mapStateToProps, { getItems, deleteItem, addItem })(ShoppingList)