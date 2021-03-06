import React, { Component } from 'react'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

class Todo extends Component {
  
  render(){
    return (
      <div>
        <PageHeader name='Tasks' small='Registration' />
        <TodoForm />
        <TodoList />
      </div>
    )
  }
}

export default Todo
