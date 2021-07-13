import React, { useState } from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import CourseService from '../services/courseService';
import 'bootstrap/dist/css/bootstrap.min.css';
import AssignmentModal from '../components/Assignment';
import CourseDetailsModal from '../components/CourseContent';
import GradeModal from '../components/Grade';
import CourseContentService from '../services/courseContentService';
import AssignmentService from '../services/assignmentService';
//import CourseContent from './CourseContent';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [courseModalShow, setCourseModalShow] = useState(false);
  const [courseModalData, setCourseModalData] = useState({
    id:"WnXd1NOMSYlqY4ofj9RC",
    title:"",
    description:"",
    content:"",
    type:"",
    is_assignment:"",
    deadline:"",
    submissions:"",
  });
  const [assignmentModalShow, setAssignmentModalShow] = useState(false);
  const [assignmentModalData, setAssignmentModalData] = useState({
    homework: "test",
    homeworkSolution: "Solved",
    quiz: "pass",
  });
  const [gradeModalShow, setGradeModalShow] = useState(false);
  const [gradeModalData, setGradeModalData] = useState({
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
            <Button variant="primary" onClick={
                async (course) => {
                setCourseModalShow(true);
                setCourseModalData(await CourseContentService.getCourseContent(course.id));
                console.log(await CourseContentService.getCourseContent("9Qp7uq03V7PB0GKpzHcr"));
                console.log(course.id);
              }
            }>
              Course Contents  
            </Button>
            &nbsp;&nbsp;
            <Button variant="primary" onClick={() => setAssignmentModalShow(true)}>
              Assignments
            </Button>
            &nbsp;&nbsp;
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
    <Row>
   
    </Row>
    <br />
  </div></Container>
}
const CourseDetails = (props) => {
  const [newAssignment, setNewAssignment] = useState({
    title: "",
    description: "",
    content: "",
    type: 0,
    is_assignment:"",
    deadline:""
});
const newAssignmentChanged = (e) => {
  setNewAssignment({...newAssignment, [e.target.name]: e.target.value});
}
  const course = props.course;
  return (
    <div>
      <span >ID: {course.id}</span>
      <span>Title: {course.title}</span>
      <span>Course Code: {course.course_code}</span>
      <span>Session Code: {course.session_code}</span>
      <h3>Add Assignment</h3>
     <form>
         <input type="text" placeholder="title" name="title" onChange={newAssignmentChanged} />
         <input type="text" placeholder="description" name="description" onChange={newAssignmentChanged} /><br/>
         <input type="text" placeholder="content" name="content" onChange={newAssignmentChanged} />
         <input type="number" placeholder="type" name="type" defaultValue="0" onChange={newAssignmentChanged} /><br/><br/>
         <input type="number" placeholder="Is assignment" name="is_assignment" defaultValue="0" onChange={newAssignmentChanged} /><br/><br/>
         <input type="text" placeholder="deadline" name="deadline"  onChange={newAssignmentChanged} /><br/><br/>
         <button className="btn btn-secondary" onClick={async (e) => {
             e.preventDefault();
             console.log("Assignment created with ID: " + await AssignmentService.addAssignment(course.id,newAssignment));
         }}>Create Assignment</button>
     </form><br/>
     
    </div>
    
  )
}


export default Courses