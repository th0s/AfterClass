import React from 'react';
import axios from 'axios';

export default class Teacher extends React.Component {

  handleClick(e) {
    console.log('Teacher');
  }

  render() {
    return (
      <div className="col-md-4 col-xs-6">
        <div className="teacher zoom-hover rounded" onClick={this.handleClick}>
          <div className="card-title">Teacher View</div>
        </div>
      </div>
    );
  }
}