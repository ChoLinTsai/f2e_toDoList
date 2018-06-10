import React, { Component } from 'react';
import './navbar.scss';
import { Container, Navbar, NavItem } from 'react-materialize';
import { Link } from 'react-router-dom';

export default class Navigation extends Component {

  render() {

    return (

      <div className="navBarBlock">
        <Container>

          <Navbar brand="">
            <li className="navMyTasks">
              <Link to="/f2e_toDoList/">My Tasks</Link>
            </li>
            <li className="nav-inProgress">
              <Link to="/f2e_toDoList/inprogress">In Progress</Link>
            </li>
            <li className="nav-done">
              <Link to="/f2e_toDoList/done">Done</Link>
            </li>
          </Navbar>

        </Container>
      </div>
    )
  }
}