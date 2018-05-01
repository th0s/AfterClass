// Module Imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Component Imports
import Teacher from './teacher.jsx';
import Student from './student.jsx';
import Parent from './parent.jsx';
import Contact from './contact.jsx';
import Nav from './nav.jsx';
import Routes from './routes.jsx';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true
    });
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong</h1>;
    }
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