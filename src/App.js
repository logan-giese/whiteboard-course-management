import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import * as ReactBootStrap from 'react-bootstrap';
import About from './components/About';
import Profile from './components/Profile';
import Courses from './components/Courses';
import Assignments from "./components/Assignments";
import Messages from './components/Messages';
import Tools from './components/Tools';
import Home from './components/Home';
import ServiceTestPage from './components/test/ServiceTestPage';
import {Navigation} from './components/Navigation';

function App({ handleLogout, user }) {
  return (
    <BrowserRouter>
      <div className="Container">
        <h1 className="m-3 d-flex justify-content-center">WHITEBOARD</h1>
        <Navigation user={user} handleLogout={handleLogout} />
        <div className="route">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/profile" component={Profile} />
            <Route path="/courses" component={Courses} />
            <Route path="/courses/assignments" component={Assignments} />
            <Route path="/messages" component={Messages} />
            <Route path="/tools" component={Tools} />
            <Route path="/service-tests" component={ServiceTestPage} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
