import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import courseService from '../services/courseService';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  CardHeader
} from "@material-ui/core/";
import { useHistory, Redirect } from 'react-router-dom'
import Courseform from './Assigform';
import Gradeform from './Grade';
import CourseDetail from './CourseContent';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2)
  }
}));

export default function StudentCourse() {
  const classes = useStyles();
  const [course, setCourse] = useState([])
  const [currentId, setCurrentId] = useState('')
  const [open, setOpen] = useState(false);
  const [opendetails, setOpendetails] = useState(false);
  const [opengrade, setOpengrade] = useState(false);
  useEffect(() => {
    courseService.getCourses().then((courses) => {
      setCourse(courses);
    });
  }, []);
  let history = useHistory();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpendetail = () => {
    setOpendetails(true);
  };

  const handleClosedetail = () => {
    setOpendetails(false);
  };
  const handleClickOpengrade = () => { 
    setOpengrade(true);
  };

  const handleClosegrade = () => {
    setOpengrade(false);
  };

  const addorEdit = (e) => {
    if (currentId === '') {
      //create function
      courseService.createCourse(e).then(() => {
        console.log("created new item successfully!")

      }).catch((e) => {
        console.log("failled to create a new course")
      });
    } else
      //update
      courseService.updateCourse(currentId, e).then(() => {
        console.log("course Updated successfully")
      }).catch((e) => {
        console.log(e)
      })
    setCurrentId('')

  }
  return (

    <div className={classes.root}>

      {course.map((courseitem) => (
        <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >

          <Grid item xs={12} >
            <Card>
              <CardHeader
                title={`Course : ${courseitem.title}`}

              />
              <CardContent>
                {courseitem.course_code}
              </CardContent>
              <CardContent>
                {courseitem.semester_code}
              </CardContent>
              <CardContent>
              <Button variant="outlined" color="primary" onClick={handleClickOpendetail}>
                  Course Detail
                </Button>
                <Dialog open={opendetails} onClose={handleClosedetail} aria-labelledby="form-dialog-title"
                   >
                  <DialogTitle id="form-dialog-detail">  Course Detail</DialogTitle>
                  <DialogContent>
                    <DialogContentText>

                    </DialogContentText>

                    <CourseDetail  />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClosedetail} color="primary">
                      Cancel
                    </Button>

                  </DialogActions>
                </Dialog>
              </CardContent>
              <CardContent>
                <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                  Add Assignment
                </Button>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                  <DialogTitle id="form-dialog-assignment">  Add or Edit Page</DialogTitle>
                  <DialogContent>
                    <DialogContentText>

                    </DialogContentText>

                    <Courseform {...({ addorEdit, currentId, course })} />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} color="primary">
                      Cancel
                    </Button>

                  </DialogActions>
                </Dialog>
              </CardContent>
              <CardContent>
              <Button variant="outlined" color="primary" onClick={handleClickOpengrade}>
                  Grade
                </Button>
                <Dialog open={opengrade} onClose={handleClosegrade} aria-labelledby="form-dialog-title">
                  <DialogTitle id="form-dialog-grade">  Grade </DialogTitle>
                  <DialogContent>
                    <DialogContentText>

                    </DialogContentText>

                    <Gradeform {...({ addorEdit, currentId, course })} />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClosegrade} color="primary">
                      Cancel
                    </Button>

                  </DialogActions>
                </Dialog>
              </CardContent>
            </Card>
          </Grid>

        </Grid>
      ))}
    </div>
  );
}
