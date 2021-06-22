import React, { Component }  from 'react';
import './App.css';
import {BrowserRouter , Route, Switch} from 'react-router-dom'
import * as ReactBootStrap from 'react-bootstrap'
import About from './components/About'
import Courses from './components/Courses'
import Home from './components/Home'
import ServiceTestPage from './components/test/ServiceTestPage'
import {Navigation} from './components/Navigation'
import logo from './logo.svg';

function App() {
  return (
 <BrowserRouter>
 <div className = "Container">
 {/* <img src={logo} className ="App-logo" alt ="logo" /> */}
   <h1 className = "m-3 d-flex justify-content-center">OC BLACKBOARD</h1>
   
   <Navigation/>
   <Switch>
     <Route path='/' component={Home} exact />
     <Route path='/about' component={About} />
     <Route path='/courses' component={Courses} />
     <Route path='/service-tests' component={ServiceTestPage} />
   </Switch>
 </div>
 </BrowserRouter>
  );
}
export default App;
