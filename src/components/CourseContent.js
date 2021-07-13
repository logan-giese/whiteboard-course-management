import React from 'react'
import { Container, Button, Row, Col,Modal } from 'react-bootstrap';
//import CourseService from '../services/courseService';
import 'bootstrap/dist/css/bootstrap.min.css';

const CourseDetailsModal=(props)=> {
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Course Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Col xs={12} md={8}>
               {props.data.title}
              </Col>
              </Row>
              <Row>
              <Col xs={6} md={4}>
              {props.data.homeworkSolution}
              </Col>
            </Row>

            <Row>
              <Col xs={6} md={4}>
              {props.data.quiz}
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}
export default CourseDetailsModal
