import React from 'react'
import { connect } from 'react-redux'

import IconButton from '../template/iconButton'

const TodoList = props => {

  const renderRows = () => {
    const list = props.list || []
    return list.map(todo => (
     <tr key={todo._id}>
       <td className={todo.done ? 'done' : ''}>{todo.description}</td>
       <td className="tableActions">
         <IconButton style="success" hide={todo.done}
          onClick={() => props.handleDone(todo)} 
          icon='check'>
        </IconButton>
        <IconButton style="warning" hide={!todo.done}
          onClick={() => props.handleUndo(todo)}
          icon='undo'>
        </IconButton>
        <IconButton style="danger" hide={!todo.done}
          onClick={() => props.handleRemove(todo)}
          icon='trash-o'>
        </IconButton>
       </td>
     </tr> 
    ))
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )
}

const mapStateToProps = state => ({list: state.todo.list})

export default connect(mapStateToProps)(TodoList)