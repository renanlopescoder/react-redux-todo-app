import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { changeDescription, search, add } from './todoActions'

class TodoForm extends Component {
  constructor(props) {
    super(props)
    this.keyHandler = this.keyHandler.bind(this)
  }
  
  componentWillMount(){
    this.props.search()
  }

  keyHandler(event) {
    const { add, search, description } = this.props;
    if (event.key === 'Enter') {
      event.shiftKey ? search() : add(description)
    } else if (event.key === 'Escape') {
      this.props.handleClear()
    }
  }

  render() {
    const { add, search, description, changeDescription } = this.props;
    return (
      <div role='form' className='todoForm row'>
        <Grid cols="12 9 10">
          <input type="text" id="description" className="form-control" placeholder="Register a new task" value={description} onChange={changeDescription} onKeyUp={this.keyHandler} />
        </Grid>
        <Grid cols="12 3 2">
          <IconButton style="primary" icon="plus"
            onClick={ () => add(description) }>
          </IconButton>
          <IconButton style="info" icon="search"
            onClick={ () => search() }>
          </IconButton>
          <IconButton style="default" icon="close" >
            {/* onClick={this.props.handleClear}> */}
          </IconButton>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => ({ description: state.todo.description })

const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription, search, add }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)