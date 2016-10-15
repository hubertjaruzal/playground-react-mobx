import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Todo List'
    }
  }

  createNewTodo = (e) => {
    if(e.which === 13) {
      this.props.todoStore.addTodo(e.target.value, this.props.todoStore.list);
      e.target.value = '';
    }
  }

  removeTodos = (e) => {
    this.props.todoStore.removeDoneTodo(this.props.todoStore.list);
  }

  toggleTodo = (todo) => {
    todo.done = !todo.done
    localStorage.setItem('List', JSON.stringify(this.props.todoStore.list));
  }

  clearList = (list) => {
    this.props.todoStore.clearTodos(list);
  }

  filter = (e) => {
    this.props.todoStore.filter = e.target.value;
  }

  render() {
    return (
      <section className='app'>
        <div className='modal__container'>
          <div className='modal__header'>
            <h1>{this.state.name}</h1>
          </div>
          <div className='modal__box'>
            <div className='settings__box'>
              <input
                placeholder='Filter'
                value={this.props.todoStore.filter}
                onChange={this.filter.bind(this)}
              />
            </div>
            <div className='settings__box'>
              <input
                placeholder='Add'
                onKeyPress={this.createNewTodo.bind(this)}
              />
            </div>
            <div className='settings__box'>
              <button
                className='settings__btn'
                onClick={this.removeTodos.bind(this)}
              >
                Remove done todos
              </button>
            </div>
            <div className='settings__box'>
              <button
                className='settings__btn'
                onClick={this.clearList.bind(this, this.props.todoStore.list)}
              >
                Clear List
              </button>
            </div>
            <div className='list__container'>
              {
                this.props.todoStore.filterTodoList.length === 0 ?
                  <p>You do not have any items in your Todo list...</p>
                  :
                  <ul>
                    {
                      this.props.todoStore.filterTodoList.map((todo,index) => (
                        <li key={index} onClick={this.toggleTodo.bind(this, todo)} >
                          <span>{index+1}. </span>
                          <span className={todo.done ? 'todo__checked' : ''} >
                            {todo.name}
                          </span>
                        </li>
                      ))
                    }
                  </ul>
              }
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
