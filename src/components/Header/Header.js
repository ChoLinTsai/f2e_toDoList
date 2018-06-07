import React, { Component } from 'react';
import './header.scss';

import NavBar from './NavBar/NavBar.js'

export default class Header extends Component {

  render() {
    return(
      <div className="headerBlock">

        <NavBar />
        
      </div>
    )
  } 
}