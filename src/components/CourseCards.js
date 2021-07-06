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
  
  const data = {
    name: [
      { quarter: 1, earnings: 13000 },
      { quarter: 2, earnings: 16500 },
      { quarter: 3, earnings: 14250 },
      { quarter: 4, earnings: 19000 }
    ],
    id: [1, 2, 3, 4]
  };
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
          
            <Grid item xs={3} key={course.course_code}>
            <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title={elem.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {elem.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {elem.semester_code}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {elem.course_code}
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
 
            </Grid>
        
        </Grid>
      ))}
    </div>
  );
}