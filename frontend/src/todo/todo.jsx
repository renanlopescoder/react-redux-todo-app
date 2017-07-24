import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const url = `http://localhost:3000/api/todos`

class Todo extends Component {
  
  constructor(props) {
    super(props)
    this.state = { 
      description: '', 
      list: [] 
    }
    this.handleAdd = this.handleAdd.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleDone = this.handleDone.bind(this)
    this.handleUndo = this.handleUndo.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleClear = this.handleClear.bind(this)

    this.refresh()
  }

  refresh(description = '') {
    const search = description ? `&description__regex=/${description}/` : ''
    axios.get(`${url}?sort=-createdAt${search}`)
      .then(resp => this.setState({...this.state, description: description, list: resp.data}))
  }

  handleSearch(){
    this.refresh(this.state.description)
  }

  handleChange (event) {
    this.setState({...this.state, description: event.target.value})
  }

  handleAdd() {
    const description = this.state.description
    axios.post(url, { description })
      .then(resp => this.refresh(), error => console.log(error))
  }

  handleRemove(todo) {
    axios.delete(`${url}/${todo._id}`)
      .then(resp => this.refresh(this.state.description), error => console.log(error))
  }

  handleDone(todo) {
    axios.put(`${url}/${todo._id}`, { ...todo, done: true })
      .then(resp => this.refresh(this.state.description), error => console.log(error))
  }

  handleUndo(todo) {
    axios.put(`${url}/${todo._id}`, { ...todo, done: false })
      .then(resp => this.refresh(this.state.description), error => console.log(error))
  }

  handleClear() {
    this.refresh()
  }

  render(){
    return (
      <div>
        <PageHeader name='Tasks' small='Registration' />
        <TodoForm 
          handleAdd={this.handleAdd}
          description={this.state.description}
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
          handleClear={this.handleClear}
        ></TodoForm>
        <TodoList 
          list={this.state.list}
          handleRemove={this.handleRemove}
          handleDone={this.handleDone}
          handleUndo={this.handleUndo}
        ></TodoList>
      </div>
    )
  }
}

export default Todo
