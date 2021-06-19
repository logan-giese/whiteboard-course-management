import React, {useState, useEffect} from 'react';
import courseService from '../services/courseService';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Courseform from './Courseform';


function StudCourse() {
 

    const [course, setCourse] = useState([])
    const [currentId, setCurrentId] = useState('')
    const [open, setOpen] = useState(false);
    
    useEffect(() => {
        
      courseService.getCourses().then((courses) => {
        setCourse(courses);
      });
    }, []);
    
    const handleClickOpen = (id) => {
    setCurrentId(id)
   setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
   const handaledelete =(id) =>{
     
    courseService.deleteCourse(id).then(()=>{
      
    }).catch((e)=>{
      console.log(e)
    })
    setCurrentId('')
   }
   const addorEdit = (e) =>{
       if(currentId ===''){
    //create function
    courseService.createCourse(e).then(()=>{
      console.log("created new item successfully!")

    }).catch((e)=>{
      console.log("failled to create a new course")
    });
        } else 
        //update
        courseService.updateCourse(e.id,e).then(()=>{
          console.log("course Updated successfully")
        }).catch((e)=>{
          console.log(e)
        })
        setCurrentId('')

    }
    
  return (
       
    <div className="table">
    
    
    <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Course
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">  Add or Edit Page</DialogTitle>
        <DialogContent>
          <DialogContentText>
       
          </DialogContentText>
          
        <Courseform {...({addorEdit, currentId, course})}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        
        </DialogActions>
      </Dialog>
    <table className ="table table-borderless table-stripped">
        <thead className="thead-light">
            <tr>
                <th>Title</th>
                <th>Course Code</th>
                <th>Semester Code</th>
                <th>Session Code</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
          {
              Object.keys(course).map(id =>{
                  return < tr key={id}>
                      <td>{course[id].title}</td>
                      <td>{course[id].course_code}</td>
                      <td>{course[id].semester_code}</td>
                      <td>{course[id].session_code}</td>
                      <td>
                      <a className ="btn text-primary" onClick ={() => {setCurrentId(id)}}>
                                        <CreateIcon onClick ={() => handleClickOpen(course[id].id)}/></a> 
                                <a className ='btn text-danger' >
                                   <DeleteIcon onClick={() => handaledelete(course[id].id)}/>
                                </a>
                        </td>
                        
                  </tr>
              })
          }  
        </tbody>
    </table>
 </div>
    
  )
}

export default StudCourse