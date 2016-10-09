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

  filter = (e) => {
    this.props.todoStore.filter = e.target.value;
  }

  render() {
    return (
      <div className='App'>
        <h1>{this.state.name}</h1>
        <div>
          <span>Filter: </span>
          <input value={this.props.todoStore.filter} onChange={this.filter.bind(this)} />
        </div>
        <div>
          <span>Add: </span>
          <input onKeyPress={this.createNewTodo.bind(this)} />
        </div>
        <div>
          <ul>
            {
              this.props.todoStore.filterTodoList.map(todo => (
                <li key={todo.id}>
                  <span>{todo.name}</span>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
