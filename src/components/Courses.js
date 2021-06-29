import React, { Component, useState } from 'react'
import Assignment from './Assignment'
import { Container, Card, Button,Row,Col, Text} from 'react-bootstrap';
import CourseService from '../services/courseService';
import 'bootstrap/dist/css/bootstrap.min.css';

const Courses = () => {
  const [courses, setCourses] = useState([]);

  const [newCourse, setNewCourse] = useState({
    title: "",
    course_code: "",
    session_code: "",
    semester_code: "",
  });
  const newCourseChanged = (e) => {
    setNewCourse({ ...newCourse, [e.target.name]: e.target.value });
  }

  return <Container><div><h1>Courses page</h1>
  <Row><Col>
 <button type="button" className="btn btn-primary" onClick={
      async () => {
        setCourses(await CourseService.getCourses());
        console.log(courses[0]);
      }
    }>Display All Courses</button></Col>
    </Row>
    <br/>
    <Row>
    {courses.map((course) => {
      return <Col><Card style={{width:'30rem' }}>
        {/* <Card.Img variant="top" src="https://via.placeholder.com/30x30" /> */}
        <Card.Body>
          <Card.Title>Course Name</Card.Title>
          <Card.Text><CourseDetails key={course.id} course={course} />
          </Card.Text>
          <Button variant="primary">Get Details</Button>
        </Card.Body>
      </Card></Col>
    })}
     </Row> 
     <br/> 
    <h3>Add Courses:</h3>
    <form>
      <input type="text" placeholder="Title" name="title" onChange={newCourseChanged} /><br/>
      <input type="text" placeholder="Course Code" name="course_code" onChange={newCourseChanged} /><br/>
      <input type="text" placeholder="Session Code" name="session_code" onChange={newCourseChanged} /><br/>
      <input type="text" placeholder="Semester Code" name="semester_code" defaultValue="0" onChange={newCourseChanged} /><br/><br/>
      <button className="btn btn-secondary" onClick={async (e) => {
        e.preventDefault();
        console.log("User created with ID: " + await CourseService.createCourse(newCourse));
      }}>Add Course</button>
    </form><br />
  </div></Container>



}
const CourseDetails = (props) => {
  const course = props.course;
  return (
    <div>
      ID: {course.id}<br />
      Title: {course.title}<br />
      Course Code: {course.course_code}<br />
      Session Code: {course.session_code}<br />
      Course Content
      <ul>
        {/* {course.content.id}
        {course.content.title}
        {course.content.description}
        {course.content.content} */}
      </ul>
      <Assignment />
      <ul>
      {/* {course.content.deadline}
      {course.content.submissions} */}
      </ul><br />
    </div>
  )
}
export default Courses