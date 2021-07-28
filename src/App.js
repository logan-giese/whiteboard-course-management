import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";
import About from "./components/About";
import Profile from "./components/Profile";
import Courses from "./components/Courses";
import AdminCourses from "./components/AdminCourses";
import Assignments from "./components/ProfessorAssignmentsCRUD";
import Messages from "./components/Messages";
import Home from "./components/Home";
import ServiceTestPage from "./components/test/ServiceTestPage";
import { Navigation } from "./components/Navigation";
import StudentCourseView from "./components/StudentCourseView";
import StudentCourse from "./components/StudentCourse";
import CourseCards from "./components/CourseCards";

function App({ handleLogout, user }) {
  return (
    <BrowserRouter>
      <div className="Container">
        <h1 className="m-3 d-flex justify-content-center">OC BLACKBOARD</h1>
        <button onClick={handleLogout}>Logout</button>
        <Navigation />
        <div className="route">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/profile" component={Profile} />
            <Route path="/courses" component={Courses} />
            <Route path="/assignments" component={Assignments} />
            <Route path="/studentCourseView" component={StudentCourseView} />
            <Route path="/studentCourse" component={StudentCourse} />
            <Route path="/courseCards" component={CourseCards} />
            <Route path="/messages" component={Messages} />
            <Route path="/service-tests" component={ServiceTestPage} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
