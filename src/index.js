import React from 'react';
import ReactDOM from 'react-dom';
import List from './List.js';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="grid-container">
          <div className="grid-item">
            <List day="Monday"/>
          </div>
          <div className="grid-item">
            <List day="Tuesday"/>
          </div>
          <div className="grid-item">
            <List day="Wednesday"/>
          </div>
          <div className="grid-item">
            <List day="Thursday"/>
          </div>
          <div className="grid-item">
            <List day="Friday"/>
          </div>
          <div className="grid-item">
            <List day="Saturday"/>
          </div>
          <div className="grid-item">
            <List day="Sunday"/>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
