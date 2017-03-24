import React, { Component } from 'react'

// Users should be able to add tasks to the list.
// Task 1: Add the newTaskAddButton to the render and bind it to a the component method addTask
// Task 2: Implement the `addTask` method. This method should modify the `ToDoList`
// component's state. Changing the state will render this component and its child components.
// Changes in the state must be explicit. That's called one-way data-binding

class TodoList extends Component {
  constructor() {
    super()
    this.state = {
      tasks: [
        { name: "Learn more advance React, it's awesome!" }
      ]
    }
    this.inputTaskName
    this.inputChanged = this.inputChanged.bind(this)
  }

  inputChanged(event) {
    //this method is just a hint of how you can implement the addTask function
    console.log(this.inputTaskName.value)
  }

  // Task 2. Implement this method to add new tasks to the list
  addTask() {
    // You need to change this.state using this.setState({your new state}) otherwhise React doesn´t track your changes,
    // in other words it doesn't re-render the task list
    let tasks = { tasks: [...this.state.tasks] }
    this.setState(tasks)
  }

  render() {
    const TasksComponents = this.state.tasks.map((task, index) => (<ListItem task={task} />) )
    const NewTaskInput = <input ref={ el => { this.inputTaskName = el }} type="text" onChange={this.inputChanged}/>
    const NewTaskButton = <button>Add new Product</button>

    return (
      <div>
        <ul>
          // Write some code here
        </ul>
        // Write some code here
      </div>
    )
  }
}

export const ListItem = props => (
    <li>
        {props.task.name}
    </li>
)

export default TodoList
