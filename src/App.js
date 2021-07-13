import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import About from './components/About'
import Profile from './components/Profile'
import Courses from './components/Courses'
import Messages from './components/Messages'
import Home from './components/Home'
import ServiceTestPage from './components/test/ServiceTestPage'
import {Navigation} from './components/Navigation'

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
     <Route path='/profile' component={Profile} />
     <Route path='/courses' component={Courses} />
     <Route path ='/messages' component ={Messages}/>
     <Route path='/service-tests' component={ServiceTestPage} />
   </Switch>
 </div>
 </BrowserRouter>
  );
}

export default App;
