import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'React-mobX',
      list: this.props.todoStore.list
    }
  }

  createNewTodo = (e) => {
    if(e.which === 13) {
      this.props.todoStore.addTodo(e.target.value, this.state.list);
      e.target.value = '';
    }
  }

  render() {
    return (
      <div className='App'>
        <h1>{this.state.name}</h1>
        <input onKeyPress={this.createNewTodo.bind(this)} />
        <div>
          <ul>
            {
              this.state.list.map(todo => (
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
