import React, { Component } from 'react'
import { Input, Button, List } from 'antd'
import store from '../../store'
import { getDomData } from '../../utils/util'
import {
  getChangeInputAction,
  getAddTodoItemAction,
  getDeleteTodoItemAction,
} from '../../store/createActions'

export class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleDeleteItem = this.handleDeleteItem.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    store.subscribe(this.handleStoreChange)
  }

  render() {
    return (
      <div style={{ margin: '10px' }}>
        <Input
          value={this.state.inputValue}
          placeholder="todo info"
          style={{ width: '300px', marginRight: '10px' }}
          onChange={this.handleInputChange}
        ></Input>
        <Button type="primary" onClick={this.handleBtnClick}>
          提交
        </Button>
        <List
          style={{ marginTop: '10px', width: '300px' }}
          bordered
          dataSource={this.state.list}
          onClick={this.handleDeleteItem}
          renderItem={(item, index) => (
            <List.Item data-index={index}>{item}</List.Item>
          )}
        />
      </div>
    )
  }

  handleInputChange(e) {
    const action = getChangeInputAction(e.target.value)
    store.dispatch(action)
  }

  handleStoreChange() {
    this.setState(store.getState())
  }

  handleBtnClick() {
    const action = getAddTodoItemAction()
    store.dispatch(action)
  }

  handleDeleteItem(e) {
    if (e.target.nodeName.toLowerCase() === 'li') {
      const action = getDeleteTodoItemAction(getDomData(e.target, 'index'))
      store.dispatch(action)
    }
  }
}

export default TodoList
