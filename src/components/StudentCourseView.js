import React, {useState} from 'react'
import ListAltIcon from '@material-ui/icons/ListAlt';
import { useHistory, Redirect } from 'react-router-dom'
import Paper from "@material-ui/core/Paper";


import GridOnIcon from '@material-ui/icons/GridOn';
function StudentCourseView(){
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
    <div>
        <ListAltIcon onClick= {handleListClick}/>
      <GridOnIcon onClick= {handleCardClick}/>
    </div>
  )
}

export default StudentCourseView;

