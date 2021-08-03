import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import * as ReactBootStrap from 'react-bootstrap';
import About from './components/About';
import Profile from './components/Profile';
import Courses from './components/Courses';
import AdminCourses from './components/AdminCourses';
import StudCourse from './components/StudCourse';
import Assignments from './components/ProfessorAssignmentsCRUD';
import Assignment from './components/Assignment';
import Messages from './components/Messages';
import Tools from './components/Tools';
import Home from './components/Home';
import StudentCourseView from './components/StudentCourseView';
import StudentCourse from './components/StudentCourse';
import CourseCards from './components/CourseCards';
import Dashboard from './components/DashboardSidebar';
import SelectedCourseDash from './components/SelectedCourseDash';
import Users from './components/Users';
import ServiceTestPage from './components/test/ServiceTestPage';
import { Navigation } from './components/Navigation';

function App({ handleLogout, user }) {
  return (
    <BrowserRouter>
      <div className="Container">
        <h1 className="m-3 d-flex justify-content-center">WHITEBOARD</h1>
        {/* TODO: investigate dashboard vs. navigation */}
        <Dashboard />
        <Navigation user={user} handleLogout={handleLogout} />
        <div className="route">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/profile" component={Profile} />
            <Route path="/courses" component={Courses} />
            <Route path="/assignments" component={Assignments} />
            <Route path="/studentCourseView" component={StudentCourseView} />
            <Route path="/studentCourse" component={StudentCourse} />
            <Route path='/studcourses' component={StudCourse} />
            <Route path='/selectedCourse' component={SelectedCourseDash} />
            <Route path='/courseAssignment' component={Assignment} />
            <Route path="/courseCards" component={CourseCards} />
            <Route path="/messages" component={Messages} />
            <Route path="/tools" component={Tools} />
            <Route path='/users' component={Users} />
            <Route path="/service-tests" component={ServiceTestPage} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
