import React, { useState } from 'react';
import { Container, Card, Button, Row, Col,Modal } from 'react-bootstrap';
import CourseService from '../services/courseService';
import 'bootstrap/dist/css/bootstrap.min.css';
import AssignmentModal from '../components/Assignment';
import CourseDetailsModal from '../components/CourseContent';
import GradeModal from '../components/Grade';
//import CourseContent from './CourseContent';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [courseModalShow, setCourseModalShow] = useState(false);
  const [courseModalData,setCourseModalData] = useState({
    homework: "test",
    homeworkSolution: "Solved",
    quiz: "pass",
    });
  const [assignmentModalShow, setAssignmentModalShow] = useState(false);
  const [assignmentModalData,setAssignmentModalData] = useState({
      homework: "test",
      homeworkSolution: "Solved",
      quiz: "pass",
      });
  const [gradeModalShow, setGradeModalShow] = useState(false);
  const [gradeModalData,setGradeModalData] = useState({
          homework: "test",
          homeworkSolution: "Solved",
          quiz: "pass",
          });

  return <Container><div><h1>Courses page</h1>
    <Row><Col>
      <button type="button" className="btn btn-primary" onClick={
        async () => {
          setCourses(await CourseService.getCourses());
        }
      }>Display All Courses</button></Col>
    </Row>
    <br />
    <Row>
      {courses.map((course) => {
        return <Col lg={12}><Card >
          {/* <Card.Img variant="top" src="https://via.placeholder.com/30x30" /> */}
          <Card.Body>
            <Card.Title>Course Name</Card.Title>
            <Card.Text><CourseDetails course={course} />
            </Card.Text>
            <Button variant="primary" onClick={() => setCourseModalShow(true)}>
            Course Contents
            </Button>
            <Button variant="primary" onClick={() => setAssignmentModalShow(true)}>
           Assignments
            </Button>
            <Button variant="primary" onClick={() => setGradeModalShow(true)}>
           Grade
            </Button>
            <GradeModal show={gradeModalShow} data={gradeModalData} onHide={() => setGradeModalShow(false)} />
            <AssignmentModal show={assignmentModalShow} data={assignmentModalData} onHide={() => setAssignmentModalShow(false)} />
            <CourseDetailsModal show={courseModalShow} data={courseModalData} onHide={() => setCourseModalShow(false)} />
          </Card.Body>
        </Card></Col>
      })}
    </Row>
    <br />
  </div></Container>
}
const CourseDetails = (props) => {
  const course = props.course;
  return (
    <div>
      <span>ID: {course.id}</span>
      <span>Title: {course.title}</span>
      <span>Course Code: {course.course_code}</span>
      <span>Session Code: {course.session_code}</span>

      {/* <ul>
        {course.content.id}
        {course.content.title}
        {course.content.description}
        {course.content.content}
      </ul> */}

      {/* <ul>
      {course.content.deadline}
      {course.content.submissions}
      </ul><br /> */}
    </div>
  )
}

export default Courses;
