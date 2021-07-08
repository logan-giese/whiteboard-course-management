import React,{useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { positions } from '@material-ui/system';
import StarIcon from '@material-ui/icons/Star';
import courseService from '../services/courseService';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import SelectedCourseDash from "./SelectedCourseDash";
import IconButton from '@material-ui/core/IconButton';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardHeader
} from "@material-ui/core/";
import ListAltIcon from '@material-ui/icons/ListAlt';
import { useHistory, Redirect } from 'react-router-dom'
import GridOnIcon from '@material-ui/icons/GridOn';
import CloseIcon from '@material-ui/icons/Close';
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
    const [likeColor, setLikeColor] = useState("");
    const [open, setOpen] = useState(false);
    const handleLike = () => {
        const color = likeColor ? "" : "primary";
        setLikeColor(color);
       };
    
    useEffect(() => {
      courseService.getCourses().then((courses) => {
        setCourse(courses);
      });
    }, []);
    let history = useHistory();

  const handleListClick= ()=>{
    console.log('Button is cliked!');
    history.push('/studentCourse');
  }
  const handleCardClick= ()=>{
    console.log('Button is cliked!');
    history.push('/courseCards');
  }
  const handleClickOpen = (id) => {
    setOpen(true);
    setCurrentId(id)
     };
   
     const handleClose = () => {
       setOpen(false);
     };
  return (
   
    <div className={classes.root}>
       <Dialog  fullWidth
  maxWidth="lg" open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
        <IconButton onClick={handleClose}>
            <CloseIcon />
        </IconButton></DialogTitle>
        <DialogContent  style={{height:'600px'}}>
          <DialogContentText>
       
          </DialogContentText>
          
        <SelectedCourseDash {...({ currentId, course})}/>
        </DialogContent>
        <DialogActions>
         
        </DialogActions>
      </Dialog>
       <ListAltIcon onClick= {handleListClick}/>
      <GridOnIcon onClick= {handleCardClick}/>
      {Object.keys(course).map(id =>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="flex-start"
          
          key={id}
        >
         
            <Grid item xs={12} >
              <Card   onClick ={() => handleClickOpen(id)}>
                <CardHeader
                  title={`Course : ${course[id].title}`}
                 
                />
                 <CardContent>
                    {course[id].course_code}
                </CardContent>
                <CardContent>
                    {course[id].semester_code}
                </CardContent>
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