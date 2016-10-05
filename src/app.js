import React, { Component } from 'react';
import _ from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'React-mobX'
    }
  }

  render() {
    return (
      <div className="App">
        <p>{this.state.name}</p>
      </div>
    );
  }
}

export default App;
