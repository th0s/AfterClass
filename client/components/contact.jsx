import React from 'react';
import axios from 'axios';

export default class Contact extends React.Component {
  
  handleClick(e) {
    console.log('Student');
  }

  render() {
    return (
      <div className="col-md-4 col-xs-6">
        <div className="student zoom-hover rounded" onClick={this.handleClick}>
          <div className="card-title">Student View</div>
        </div>                
      </div>
    );
  }
}