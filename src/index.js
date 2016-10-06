import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import Counter from './store/todoStore';

ReactDOM.render(
  <App counter={new Counter()} />,
  document.getElementById('root')
);
