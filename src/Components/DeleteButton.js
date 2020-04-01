import React from 'react'

function DeleteButton(props) {
  return (
    <button onClick={e => props.deleteLastItem(e)} disabled={props.noItemsFound}>
      Delete Last Item
    </button>
  )
}

export default DeleteButton
