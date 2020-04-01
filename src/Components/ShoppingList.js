import React from 'react'
import AddItemForm from './AddItemForm'
import List from './List'
import DeleteButton from './DeleteButton'

class ShoppingList extends React.Component {
  state = {
    items: []
  }

  addItem = (event, newValue) => {
    event.preventDefault()
    this.setState(oldState => ({
      items: [...oldState.items, newValue]
    }))
  }

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }))
  }

  noItemsFound = () => {
    return this.state.items.length === 0
  }

  render() {
    return (
      <div>
        <h2>Shopping List</h2>

        <AddItemForm addItem={this.addItem} />

        <DeleteButton
          deleteLastItem={this.deleteLastItem}
          noItemsFound={this.noItemsFound()}
        />

        <List items={this.state.items} />
      </div>
    )
  }
}

export default ShoppingList
