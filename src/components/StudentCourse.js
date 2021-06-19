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
  CardHeader,
  Paper
} from "@material-ui/core/";
import ListAltIcon from '@material-ui/icons/ListAlt';
import { useHistory, Redirect } from 'react-router-dom'
import GridOnIcon from '@material-ui/icons/GridOn';
import CloseIcon from '@material-ui/icons/Close';
import UserService from '../services/userService';
import Courseform from "./Courseform";
import CourseService from "../services/courseService";
// import { Dashboard } from "@material-ui/icons";
import  Dashboard  from './DashboardSidebar';
import Container from "@material-ui/core/Container"
import FormGroup from "@material-ui/core/FormGroup";

import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box'
import HomePage from './Home'
import Assignment from "./Assignment";
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { truncate } from "lodash";
const items = [
  
  {
   
    
    title: 'Announcements'
  },
  {
    
    title: 'Course Content'
  },
  {
   
    
    title: 'Discussions'
  },
 
  {
 
    
    title: 'My Grade'
  },
 
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 580,
    width: 270,
  },
  paper1: {
    height: 580,
    width: 600,
   // position: 'absolute',
    right: 0,
    top: 50
  },
  formControl: {
    margin: 0,
    fullWidth: true,
    backgroundColor: '#9ee',
    wrap: 'nowrap'
  }
}));

export default function StudentCourse() {
  const classes = useStyles();

  const [courses, setCourses] = useState([])
  const [specificCourse, setSpecificCourse] = useState([])
  const [user,setUser]=useState({})
  const [currentId, setCurrentId] = useState('')
    const [likeColor, setLikeColor] = useState("");
    const [redirect, setRedirect] =useState('')
    const [open, setOpen] = useState(false);
    const [contentClick,setContent]=useState(false)
    
    const [homeClick, setHome] =useState(false)
    const handleLike = () => {
        const color = likeColor ? "" : "primary";
        setLikeColor(color);
       };
    const [anchorEl, setAnchorEl] = React.useState(null);

        const handleClickDrop = (event) => {
    setAnchorEl(event.currentTarget);
  };
const homeOnClick =() =>{
setContent(false)
  setHome(true)
  
}

  const handleCloseDrop = () => {
    setAnchorEl(null);
  };
  const handleChange = (event) => {
    setRedirect(event.target.value);
   };
   const contentOnClick=()=>{
     setHome(false)
    setContent(true)
   }
    useEffect(async () => {
      // await UserService.getUserById("IVgTk03HogEQyQrlK2MJ").then(async (user) => {
      //   setUser(user);
      //   await courseService.getCoursesById(user.enrolled_courses).then((course) => {
      //     setCourse(course);
      //   });
      await courseService.getCourses().then((courses)=>{
        setCourses(courses);
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

    CourseService.getCourseById(id).then((specificCourse)=>{
      setSpecificCourse(specificCourse)
    })

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
            </IconButton>
        </DialogTitle>

        <DialogContent  style={{height:'600px'}}>
          <DialogContentText>
       
          </DialogContentText>
          <div className={classes.root}>
 
    <Grid container spacing={0}>
    <Grid item xs={6} >
          <Paper className ={classes.paper}><div>
      {/* <Button aria-controls="simple-menu" aria-haspopup="true">
       {specificCourse.title}
      </Button> */}
        <Box  display='flex' flex='1' justifyContent='space-around' style={{ height: '4vh' }}>
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">{specificCourse.title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={redirect}
          onChange={handleChange}
        >
          <MenuItem value={1} onClick = {homeOnClick}>Home </MenuItem>
          <MenuItem value={2} onClick = {contentOnClick}>Course Content</MenuItem>
          <MenuItem value={3} onClick = {homeOnClick}>My grade</MenuItem>
       
        </Select>
      </FormControl>
      </Box>
    </div>
    </Paper>
    </Grid>
    <Grid item xs={6}>
          <Paper className ={classes.paper1}>
          {contentClick
        ? <Assignment />
        : <HomePage />
      }
         </Paper>
         
    </Grid>
    </Grid>
  </div>


    
        {/* <SelectedCourseDash {...({ currentId, specificCourse})}/> */}
        {/* <Dashboard/> */}
        </DialogContent>
        <DialogActions>
         
        </DialogActions>
      </Dialog>
       <ListAltIcon onClick= {handleListClick}/>
      <GridOnIcon onClick= {handleCardClick}/>

      
      {Object.keys(courses).map(id =>

        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="flex-start"
          
          key={id}
        >
         
            <Grid item xs={12} >

              <Card   onClick ={() => handleClickOpen(courses[id].id)}>
                <CardHeader
                  title={`Course : ${courses[id].title}`}
                 
                />
                 <CardContent>
                    {courses[id].course_code}
                </CardContent>
                <CardContent>
                    {courses[id].semester_code}

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