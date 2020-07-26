import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Resetpassword from './screens/resetpassword/index';
import Register from './screens/register/index';
import Signin from './screens/signin/index';
import Home from './screens/home/index';
import { config } from './utils/config';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import * as serviceWorker from './serviceWorker';


const router = (
   <Router>
      <Route path={`${config.root}/home`} component={Home} />
      <Route path={`${config.root}/register`} component={Register} />
      <Route path={`${config.root}/resetpassword`} component={Resetpassword} />
      <Route exact path={`${config.root}/`} component={Signin} />
   </Router>
)


ReactDOM.render(router, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
