import React from 'react';
import axios from 'axios';

export default class Teacher extends React.Component {
  
    handleClick(e) {
      console.log('Click worked!')
    }

    render() {
        return (
            <a href="#" className="btn btn-lg btn-secondary" onClick={this.handleClick}>Learn more</a>
        )
    }
}