import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import TodoStore from './store/todoStore';

ReactDOM.render(
  <App todoStore={new TodoStore()} />,
  document.getElementById('root')
);
