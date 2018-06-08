import React, { Component } from 'react';
import './tasks.scss';
import { 
  Container,
  Collapsible,
  Row,
  Input } from 'react-materialize';

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

                  <div className="checkboxWrapper">
                    <div className="row">
                      <div className="col">
                        <input id="input_1" type="checkbox"/>
                        <label htmlFor="input_1"></label>
                      </div>
                    </div>
                  </div>

                  <div className="taskTitleWrapper">
                    <div className="row">
                      <form action="#" className="col s12">
                        <div className="row">
                          <div className="input-field col s12">
                            <input id="last_name"
                              type="text" className="validate" />
                            <label htmlFor="last_name">Task Name</label>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="taskIconWrapper">
                    <div className="row">
                      <i className="material-icons iconStar">star_border</i>
                    </div>
                    
                    <i className="material-icons iconEdit">create</i>
                  </div>
                  
                </div>

                <div className="collapsible-body">

                  <div className="taskContent">
                    <div className="deadlineBlock">
                      <div className="deadlineTitle">
                        <i className="material-icons iconDate">
                          date_range
                        </i>
                        <h6>Deadline</h6>
                      </div>

                      <div className="deadlineDateTime">

                        <div className="inputDateBlock">
                          <Input s={6} placeholder="yyyy/mm/dd"
                            className="inputDate"
                            label="Enter a Date" />
                        </div>

                        <div className="inputTimeBlock">
                          <Input s={6} placeholder="hh:mm"
                              className="inputTime"
                              label="Enter a Time/24hrs" />
                        </div>

                      </div>
                    </div>
                    <div className="fileBlock"></div>
                    <div className="commentBlock"></div>
                  </div>

                  <div className="taskContentFooter">
                  </div>
                </div>

              </li>

            </Collapsible>
          </div>

        </Container>
      </div>
    )
  }
}