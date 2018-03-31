import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Teacher from './teacher.jsx';
import Student from './student.jsx';
import Parent from './parent.jsx';

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
        <header className="masthead mb-auto">
          <div className="inner">
            <h3 className="masthead-brand">AfterClass</h3>
            <nav className="nav nav-masthead justify-content-center">
              <a className="nav-link active" href="#">Home</a>
              <a className="nav-link" href="#">Features</a>
              <a className="nav-link" href="#">Contact</a>
            </nav>
          </div>
        </header>
        <div className="view zoom">
          <img src="images/mountains.jpg" className="img-fluid " alt=""></img>
          <div className="mask flex-center">
              <p className="white-text">Zoom effect</p>
          </div>
        </div>

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
            <p>Cover template for <a href="https://getbootstrap.com/">Bootstrap</a>, by <a href="https://twitter.com/mdo">@mdo</a>.</p>
          </div>
        </footer>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));