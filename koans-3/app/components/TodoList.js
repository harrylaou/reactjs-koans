import React, { Component } from 'react'
import * as api from '../api/index'

class TodoList extends Component {
  constructor() {
    super()
    this.state = {
      tasks: []
    }
  }

  componentDidMount() {
    api
      .getTodos(this.props.userId)
      .then((response) => {
        this.setState({ tasks: response })
      })
      .catch(err => {
        console.error(err.stack)
      })
  }

  render() {
    return (
      <div>
        NOT IMPLEMENTED :(
      </div>
    )
  }
}

export default TodoList
