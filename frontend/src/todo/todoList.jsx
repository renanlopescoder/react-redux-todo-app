import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IconButton from '../template/iconButton'
import { markAsDone, undo, remove } from './todoActions'

const TodoList = props => {

  const renderRows = () => {
    const list = props.list || []
    return list.map(todo => (
     <tr key={todo._id}>
       <td className={todo.done ? 'done' : ''}>{todo.description}</td>
       <td className="tableActions">
         <IconButton style="success" hide={todo.done}
          onClick={() => props.markAsDone(todo)} 
          icon='check'>
        </IconButton>
        <IconButton style="warning" hide={!todo.done}
          onClick={() => props.undo(todo)}
          icon='undo'>
        </IconButton>
        <IconButton style="danger" hide={!todo.done}
          onClick={() => props.remove(todo)}
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

const mapDispatchToProps = dispatch => bindActionCreators({markAsDone, undo, remove}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)