import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'React-mobX',
      list: this.props.counter.list
    }
  }

  render() {
    return (
      <div className='App'>
        <h1>{this.state.name}</h1>
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
