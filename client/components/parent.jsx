import React from 'react';
import axios from 'axios';

export default class Parent extends React.Component {
  
    handleClick(e) {
      console.log('Click worked!')
    }

    render() {
        return (
            <div className="col-md-4 col-xs-6">
                <img src="images/Teachers-Do-You-Have-Student-Loans.jpg" className="img-fluid rounded"></img>
            </div>
        )
    }
}