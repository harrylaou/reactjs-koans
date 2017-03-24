import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import TodoList from '../tasks/Task_1'
import { ListItem } from '../tasks/Task_1'

describe('Todo List. A React intro to state and props', () => {

  describe('Task 1 - Display a list of tasks', () => {

    const todoListWrapper = mount(<TodoList/>)

    it('The TodoList component should have a <ul> tag element', () => {
      const actual = todoListWrapper.find('ul')
      const expected = 1
      expect(actual).to.be.length(expected)
    })

    it('The TodoList component should render 2 ListItems', () => {
      const actual = todoListWrapper.find('ul li').length
      const expected = 2
      expect(actual).to.be.equal(expected)
    })

    it('The TodoList component should pass a task object from the TodoList state to the ListItem component through a prop called task', () => {
      const actual = todoListWrapper.find(ListItem).first().props().task
      expect(actual).not.to.be.equal(undefined)
    })

    it('The ListItem component should render the name of the task', () => {
      const actual = todoListWrapper.find('ul li').first().text()
      const expected = 'Learn more JavaScript'
      expect(actual).to.be.equal(expected)
    })
  })
})
