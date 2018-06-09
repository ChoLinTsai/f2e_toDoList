import React, { Component } from 'react';
import './taskLists.scss'


export default class TaskLists extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  render() {
    return (

      <div className="taskListBlock">

        <div className="taskItem">
            <div className="row">
              <div className="col">
                <input type="checkbox"
                  id="taskItemCheckbox_1"
                  className="checkboxes"/>
                <label htmlFor="taskItemCheckbox_1"></label>
              </div>          
            </div>

            <div className="taskName">
              Buy coffee beans
            </div>

            <div className="taskItemIcons">
              <i className="material-icons itemIconStar">star</i>
              <i className="material-icons itemIconEdit">create</i>
            </div>

            <div className="taskItemInfo">
              <div className="taskDate">
                <i className="material-icons itemIconDate">date_range</i>
                <p>2018/06/11</p>
              </div>

              <div className="taskDetails">
                <i className="material-icons itemIconFile">
                  insert_drive_file
                </i>
                <i className="material-icons itemIconComment">
                  comment
                </i>
              </div>
            </div>
        </div>

        <div className="taskItem">
            <div className="row">
              <div className="col">
                <input type="checkbox"
                  id="taskItemCheckbox_1"
                  className="checkboxes"/>
                <label htmlFor="taskItemCheckbox_1"></label>
              </div>          
            </div>

            <div className="taskName">
              Buy coffee beans
            </div>

            <div className="taskItemIcons">
              <i className="material-icons itemIconStar">star</i>
              <i className="material-icons itemIconEdit">create</i>
            </div>

            <div className="taskItemInfo">
              <div className="taskDate">
                <i className="material-icons itemIconDate">date_range</i>
                <p>2018/06/11</p>
              </div>

              <div className="taskDetails">
                <i className="material-icons itemIconFile">
                  insert_drive_file
                </i>
                <i className="material-icons itemIconComment">
                  comment
                </i>
              </div>
            </div>
        </div>

        <div className="taskItem">
            <div className="row">
              <div className="col">
                <input type="checkbox"
                  id="taskItemCheckbox_1"
                  className="checkboxes"/>
                <label htmlFor="taskItemCheckbox_1"></label>
              </div>          
            </div>

            <div className="taskName">
              Buy coffee beans
            </div>

            <div className="taskItemIcons">
              <i className="material-icons itemIconStar">star</i>
              <i className="material-icons itemIconEdit">create</i>
            </div>

            <div className="taskItemInfo">
              <div className="taskDate">
                <i className="material-icons itemIconDate">date_range</i>
                <p>2018/06/11</p>
              </div>

              <div className="taskDetails">
                <i className="material-icons itemIconFile">
                  insert_drive_file
                </i>
                <i className="material-icons itemIconComment">
                  comment
                </i>
              </div>
            </div>
        </div>

      </div>
    )
  }
}