import React, { Component } from 'react';
import './tasks.scss';
import { 
  Container,
  Collapsible,
  CollapsibleItem } from 'react-materialize';

export default class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div className="sectionTasks">
        <Container>
          <div className="tasksBlock">

            <Collapsible>
              <li>
                <div className="collapsible-header">
                  565656565
                  
                </div>
                <div className="collapsible-body">
                    <span>Lorem ipsum dolor sit amet.</span>
                  </div>
              </li>

            </Collapsible>

          </div>
        </Container>
      </div>
    )
  }
}