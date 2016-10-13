import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'React-mobX'
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
          <div className='input__container'>
            <input
              placeholder='Filter'
              value={this.props.todoStore.filter}
              onChange={this.filter.bind(this)}
            />
          </div>
          <div className='input__container'>
            <input
              placeholder='Add'
              onKeyPress={this.createNewTodo.bind(this)}
            />
          </div>
          <div className='input__container'>
            <button
              className='removeTodo__btn'
              onClick={this.removeTodos.bind(this)}
            >
              Remove done Todos
            </button>
          </div>
          <div className='list__container'>
            <ul>
              {
                this.props.todoStore.filterTodoList.map(todo => (
                  <li key={todo.id}>
                    <span>{todo.id}. </span>
                    <span className={todo.done ? 'todo__checked' : ''} >{todo.name}</span>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
