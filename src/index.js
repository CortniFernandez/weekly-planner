import React from 'react';
import ReactDOM from 'react-dom';
import List from './List.js';
import './index.scss';

const date = new Date().toDateString();

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="header">Weekly Planner</h1>
        <div className="grid-container">
          <div className="grid-item monday">
            <List day="Monday"/>
          </div>
          <div className="grid-item tuesday">
            <List day="Tuesday"/>
          </div>
          <div className="grid-item wednesday">
            <List day="Wednesday"/>
          </div>
          <div className="grid-item thursday">
            <List day="Thursday"/>
          </div>
          <div className="grid-item friday">
            <List day="Friday"/>
          </div>
          <div className="grid-item saturday">
            <List day="Saturday"/>
          </div>
          <div className="grid-item sunday">
            <List day="Sunday"/>
          </div>
        </div>
        <div className="bottom-border-div">
          {date}
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
