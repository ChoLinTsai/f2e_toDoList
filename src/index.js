import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./index.scss";

import Header from './components/Header/Header.js';
import Tasks from './components/Tasks/Tasks.js';


class Index extends Component {

  render() {
    return (
      <div className="index">
        <Header />
        <Tasks />
      </div>
    )
  }
}


ReactDOM.render(
  <Index />,
  document.getElementById('index')
)
