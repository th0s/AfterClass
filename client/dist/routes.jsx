import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Mainpage from '../components/mainpage';
import Teacher from '../components/teacher';


// ReactDOM.render(
//     <Router history={browserHistory} >
//       <Route path="/" component={Mainpage} />
//       <Route path="/teacher" component={Teacher} />
//     </Router>
// , document.getElementById('app'));