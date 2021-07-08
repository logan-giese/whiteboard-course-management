import React, { Component }  from 'react';
import './App.css';
import {BrowserRouter , Route, Switch} from 'react-router-dom'
import * as ReactBootStrap from 'react-bootstrap'
import About from './components/About'
import Profile from './components/Profile'
import Courses from './components/Courses'
import Home from './components/Home'
import ServiceTestPage from './components/test/ServiceTestPage'
import Navigation from './components/Navigation'
import logo from './logo.svg';
import Users from './components/Users';
import StudentCourseView from './components/StudentCourseView';
import StudentCourse from './components/StudentCourse'
import CourseCards from './components/CourseCards'
import  Dashboard  from './components/DashboardSidebar';
import SelectedCourseDash from './components/SelectedCourseDash';

function App() {
  return (
 <BrowserRouter>
 <div className = "Container">
 {/* <img src={logo} className ="App-logo" alt ="logo" /> */}
   <h1 className = "m-3 d-flex justify-content-center">OC BLACKBOARD</h1>
  
   <Dashboard/>
 
 
   <Switch>
     <Route path='/' component={Home} exact />
     <Route path='/about' component={About} />
     <Route path='/profile' component={Profile} />
     <Route path='/courses' component={Courses} />
     <Route path='/users' component={Users} />
     <Route path='/studentCourseView' component={StudentCourseView} />
     <Route path='/studentCourse' component={StudentCourse} />
     <Route path='/courseCards' component={CourseCards} />
     <Route path='/service-tests' component={ServiceTestPage} />
     <Route path='/selectedCourse' component={SelectedCourseDash} />
   </Switch>
 </div>
 </BrowserRouter>
  );
}
export default App;
