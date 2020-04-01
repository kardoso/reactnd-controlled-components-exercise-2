import React from 'react'

class AddItemForm extends React.Component {
  state = {
    value: ''
  }

  handleChange = newValue => {
    this.setState(() => ({
      value: newValue
    }))
  }

  inputIsEmpty = () => {
    return this.state.value === ''
  }

  render() {
    return (
      <form onSubmit={e => this.props.addItem(e, this.state.value)}>
        <input
          type="text"
          placeholder="Enter New Item"
          value={this.state.value}
          onChange={e => this.handleChange(e.target.value)}
        />
        <button disabled={this.inputIsEmpty()}>Add</button>
      </form>
    )
  }
}

export default AddItemForm