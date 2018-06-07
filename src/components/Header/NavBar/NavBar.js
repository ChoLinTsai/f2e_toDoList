import React, { Component } from 'react';
import style from './navbar.scss';
import { Container, Nav } from 'react-materialize';

export default class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {  };
  }

  render() {
    return (
      <div className="navBarBlock">
        <Container>

          <nav className="nav-extended">
            <div className="nav-content">
              <ul className="tabs tabs-transparent">
                <li className="tab">
                  <a href="#test1" className="active">My Tasks</a>
                </li>
                <li className="tab">
                  <a href="#test2">In Progress</a>
                </li>
                <li className="tab">
                  <a href="#test4">Done</a>
                </li>
              </ul>
            </div>
          </nav>

        </Container>
      </div>
    )
  }
}