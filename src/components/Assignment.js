import { Container, Button, Row, Col, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react'
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardHeader,
  Paper
} from "@material-ui/core/";
import AssignmentServices from '../../src/services/assignmentService'

const Assignment = (props) => {
  const [assignment, setAssignment] = useState({
    content:"",
    deadline:"",
    description:"",
    is_assignment:"",
    title:"",
    type: 0
  })
  
  const [currentId, setCurrentId] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(async () => {
    await AssignmentServices.getAssignments("Vs8v66hbLyoMO0fuq0ED").then((assignment)=>{
      setAssignment(assignment)
    })
  }, [])

  const handleClickOpen = (id) => {
    setOpen(true);
    setCurrentId(id)
  }

  return (
    <div>
      {Object.keys(assignment).map(id =>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="flex-start"
          
          key={id}
        >
            <Grid item xs={12} >
              <Card   onClick ={() => handleClickOpen(assignment[id].id)}>
                <CardHeader
                  title={`Assignment : ${assignment[id].title}`}
                />
                 {/* <CardContent>
                    {assignment[id].course_code}
                </CardContent>
                <CardContent>
                    {assignment[id].semester_code} */}
                {/* </CardContent> */}
                <CardContent>
                {/* <StarIcon  onClick={handleLike} color={likeColor} />   */}
                </CardContent>
              </Card>
            </Grid>
        </Grid>
      )}
    </div>
  );
}

export default Assignment;
