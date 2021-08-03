import React, {useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import courseService from '../services/courseService';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardHeader,
  CardActionArea,
  CardMedia
} from "@material-ui/core/";
import ListAltIcon from '@material-ui/icons/ListAlt';
import { useHistory, Redirect } from 'react-router-dom'
import GridOnIcon from '@material-ui/icons/GridOn';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2)
  }
}));

export default function AltCard() {
  const classes = useStyles();
  const [course, setCourse] = useState([])
  const [currentId, setCurrentId] = useState('')
  const [likeColor, setLikeColor] = useState("");
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
  
   
  return (
    <div className={classes.root}>
        <ListAltIcon onClick= {handleListClick}/>
      <GridOnIcon onClick= {handleCardClick}/>
      {Object.keys(course).map(id => 
        <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          
            <Grid item xs={3} key={id}>
            <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {course[id].title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {course[id].semester_code}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {course[id].course_code}
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
 
            </Grid>
        
        </Grid>
      )}
    </div>
  );
}