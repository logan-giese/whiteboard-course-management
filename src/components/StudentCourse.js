import React,{useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { positions } from '@material-ui/system';
import StarIcon from '@material-ui/icons/Star';
import courseService from '../services/courseService';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardHeader
} from "@material-ui/core/";

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
    const handleLike = () => {
        const color = likeColor ? "" : "primary";
        setLikeColor(color);
       };
    
    useEffect(() => {
      courseService.getCourses().then((courses) => {
        setCourse(courses);
      });
    }, []);
    
  return (
    <div className={classes.root}>
      {course.map((elem) => (
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
                  title={`Course : ${elem.title}`}
                 
                />
                 <CardContent>
                    {elem.course_code}
                </CardContent>
                <CardContent>
                    {elem.semester_code}
                </CardContent>
                <CardContent>
                <StarIcon  onClick={handleLike} color={likeColor} />  
                </CardContent>
              </Card>
            </Grid>
          
        </Grid>
      ))}
    </div>
  );
}