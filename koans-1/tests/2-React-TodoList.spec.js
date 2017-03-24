import React from 'react'
import TodoList from '../tasks/Task_2'
import { expect } from 'chai'
import { mount } from 'enzyme'

describe('Todo List. A React intro to one-way data-binding ', () => {
  describe('Task 2 - Add a task', () => {
    const todoListWrapper = mount(<TodoList/>)

    it('The TodoList component should render the NewTaskButton component', () => {
      const actual = todoListWrapper.find('button')
      const expected = 1
      expect(actual).to.be.length(expected)
    })

    it('The TodoList component should render the NewTaskInput component', () => {
      const actual = todoListWrapper.find('input')
      const expected = 1
      expect(actual).to.be.length(expected)
    })

    it('The TodoList component should render the TasksComponent', () => {
      const actual = todoListWrapper.find('input')
      const expected = 1
      expect(actual).to.be.length(expected)
    })

    it('Should be possible to add a new task to the list by clicking on NewTaskButton', () => {
      todoListWrapper.find('button').simulate('click')
      expect(todoListWrapper.find('ul li')).to.be.length(2)
    })

    it('Should be the name for the task and for the input', () => {
      const newTask = 'Learn more advance JavaScript too!'
      todoListWrapper.find('input').get(0).value = newTask
      todoListWrapper.find('input').simulate('change')
      todoListWrapper.find('button').simulate('click')
      expect(todoListWrapper.find('ul li').last().text()).to.be.equal(newTask)
    })
  })
})
