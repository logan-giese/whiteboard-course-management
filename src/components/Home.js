import React, {useState } from "react";
import CourseService from "../services/courseService";
import "./Home.css";
import { Container, Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [courses, setCourses] = useState([]);

  const getCourses = async () => {
    setCourses(await CourseService.getCourses());
  };
  getCourses();

  return React.createElement(
    "div",
    { id: "hello", className: "dummyClass" },
    <div className="home background">
      <Container>
        <div>
          <h1>Your Courses</h1>
          <br />
          <Row>
            {courses.map((course) => {
              return (
                <Col lg={12}>
                  <Card className="glow">
                    <Card.Body>
                      <Card.Text>
                        <CourseDetails course={course} />
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
          <br />
        </div>
      </Container>
    </div>
  );
};

const CourseDetails = (props) => {
  const course = props.course;
  return (
    <div>
      <span> Title:  {course.title}</span>
      <span> Course Code:  {course.course_code}</span>
      <span> Session Code:  {course.session_code}</span>
    </div>
  );
};
export default Home;
