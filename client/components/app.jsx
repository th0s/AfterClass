import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Teacher from './teacher.jsx';
import Student from './student.jsx';
import Parent from './parent.jsx';
import Contact from './contact.jsx';
import Nav from './nav.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  render () {
    return (
      <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
        <Nav />

        <main role="main" className="inner cover text-center">
          <h1 className="cover-heading">Please select from one of the following views: </h1>
          <div className="row">
            <Teacher />
            <Student />
            <Parent />
          </div>
        </main>

        <footer className="mastfoot mt-auto">
          <div className="inner text-center">
            <p>Basic AfterClass Design</p>
          </div>
        </footer>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));