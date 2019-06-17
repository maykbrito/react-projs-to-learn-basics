import React from 'react'
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap'

const ShoppingListPresenter = (props) => {

    const listItems = props.items.map(({_id, name}) => (
        <ListGroupItem key={_id} className="mb-2">
            <Button 
                className="remove-btn mr-2"
                color="danger"
                size="sm"
                id={_id}
                onClick={props.handleDelete}
                >
            &times;</Button>&nbsp;
            {name}
        </ListGroupItem>
    ))

    return (
        <Container>
            <Button
                color="dark mt-3 mb-3"
                onClick={props.handleAdd}
            >Add Item</Button>

            <ListGroup>
                {listItems}
            </ListGroup>
        </Container>
    )
}

export default ShoppingListPresenter