import React from 'react';
import axios from 'axios';

export default class Parent extends React.Component {
  
    handleClick(e) {
      console.log('Parent')
    }

    render() {
        return (
            <div className="col-md-4 col-xs-6">
                <div className="parent zoom-hover rounded" onClick={this.handleClick}>
                    <div className="card-title">Parent View</div>
                </div>                
            </div>
        )
    }
}