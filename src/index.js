import React from 'react';
import ReactDOM from 'react-dom';
import List from './List.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <List day="mon"/>
        <List day="tue"/>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
