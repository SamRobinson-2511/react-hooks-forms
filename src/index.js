import React from 'react';
import ReactDOM from 'react-dom';
import ParentComponent from './components/ParentComponent'
import Number from ".components/Number"

ReactDOM.render(
  <ParentComponent />,
  <Number/>,
  document.getElementById('root')
);