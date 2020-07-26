import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Resetpassword from './screens/resetpassword/index';
import Register from './screens/register/index';
import Signin from './screens/signin/index';
import Home from './screens/home/index';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import * as serviceWorker from './serviceWorker';


const router = (
   <Router>
      <Route exact path="/" component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/resetpassword" component={Resetpassword} />
      <Route path="/signin" component={Signin} />
   </Router>
)


ReactDOM.render(router, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
