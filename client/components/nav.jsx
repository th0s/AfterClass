import React from 'react';

import Contact from './contact.jsx';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="masthead mb-auto">
        <div className="inner">
          <h3 className="masthead-brand">AfterClass</h3>
          <nav className="nav nav-masthead justify-content-center">
            <a className="nav-link active" href="#">Home</a>
            <a className="nav-link" src={<Contact />}>Contact</a>
          </nav>
        </div>
      </header>
    );
  }

}