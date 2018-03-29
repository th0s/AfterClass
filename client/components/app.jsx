import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Teacher from './teacher.jsx';

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
            <h3 className="masthead-brand">Cover</h3>
            <nav className="nav nav-masthead justify-content-center">
              <a className="nav-link active" href="#">Home</a>
              <a className="nav-link" href="#">Features</a>
              <a className="nav-link" href="#">Contact</a>
            </nav>
          </div>
        </header>

        <main role="main" className="inner cover text-center">
          <h1 className="cover-heading">Cover your page.</h1>
          <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
          <p className="lead">
            <Teacher />
          </p>
        </main>

        <footer className="mastfoot mt-auto">
          <div className="inner">
            <p>Cover template for <a href="https://getbootstrap.com/">Bootstrap</a>, by <a href="https://twitter.com/mdo">@mdo</a>.</p>
          </div>
        </footer>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));