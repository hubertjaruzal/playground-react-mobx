import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import TodoStore from './store/todoStore';

require('./styles/app.scss');

ReactDOM.render(
  <App todoStore={new TodoStore()} />,
  document.getElementById('root')
);
