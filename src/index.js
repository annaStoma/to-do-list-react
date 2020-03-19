import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DescrPageComponent from './Description';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


ReactDOM.render((
  <Router>
    <Switch>
  <Route path="/task" component={DescrPageComponent}/>
   <Route path="/" component={App} />
  </Switch>
</Router>
), document.getElementById('root'));


serviceWorker.unregister();



