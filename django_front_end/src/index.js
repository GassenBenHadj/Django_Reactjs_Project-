import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, hashHistory } from 'react-router'


//*********import the pages************************//
import NotFound from './Containers/404';
import AddBook from './Containers/AddBook' ;
import Books from './Containers/Books' ;
import Contact from './Containers/Contact';
import Home from './Containers/Home' ;
import Login from './Containers/login';
import Profile from './Containers/Profile';
import Register from  './Containers/Register';


ReactDOM.render(
  <Router history={hashHistory}>
      <Route path="/" component={App}>

       <Route path="/Home" component={Home}/>
      <Route path="/Books" component={Books}/>
        <Route path="/SignIN" component={Login}/>
          <Route path="/Register" component={Register}/>
 <Route path="/Profile" component={Profile}/>
 <Route path="/Contact" component={Contact}/>
 <Route path="/AddBook" component={AddBook}/>
 <Route path="/NotFound" component={NotFound}/>
  </Route>
    </Router>, document.getElementById('root'));
registerServiceWorker();
