import React, {useState, useEffect} from 'react';
import AssignmentService from '../services/assignmentService';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AssignmentForm from './AssignmentForm';


function Assignments() {
    const [assignment, setAssignment] = useState([])
    const [currentId, setCurrentId] = useState('')
    const [open, setOpen] = useState(false);
    
    useEffect(() => {
      AssignmentService.getAssignments("9Qp7uq03V7PB0GKpzHcr").then((assignment) => {
        setAssignment(assignment);
      });
    }, []);
    
    const handleClickOpen = () => {
   setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
   const handleDelete =(id) =>{
    AssignmentService.deleteAssignment("9Qp7uq03V7PB0GKpzHcr", id).then(()=>{
      
    }).catch((e)=>{
      console.log(e)
    })
    setCurrentId('')
   }
   const addorEdit = (e) =>{
    if(currentId ===''){
    //create function
      AssignmentService.addAssignment("9Qp7uq03V7PB0GKpzHcr",e).then(()=>{
        console.log("created assignment")

     }).catch((e)=>{
        console.log("failed to create assignment")
      });
    } 
    else 
      //update
      AssignmentService.updateAssignment("9Qp7uq03V7PB0GKpzHcr",e.id,e).then(()=>{
        console.log("assignment created successfully")
        }).catch((e)=>{
          console.log("assignment creation failed")
        })
      setCurrentId('')
    }
    
  return (
       
    <div className="table">
    <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Assignment
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Assignment</DialogTitle>
        <DialogContent>
          <DialogContentText>
        
          </DialogContentText>
        <AssignmentForm {...({addorEdit, currentId, assignment})}/>
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
              <th>Name</th>
              <th>Description</th>
              <th>Content</th>
              <th>Action</th>
            </tr>
        </thead>
        <tbody>
          { 
            Object.keys(assignment).map(id =>{
              return < tr key={id}>
                      <td>{assignment[id].title}</td>
                      <td>{assignment[id].description}</td>
                      <td>{assignment[id].content}</td>
                      <td>
                      <a className ="btn text-primary" onClick ={() => {setCurrentId(id)}}>
                                        <CreateIcon onClick ={() => handleClickOpen(assignment[id].id)}/></a> 
                                <a className ='btn text-danger'>
                                   <DeleteIcon onClick={() => handleDelete(assignment[id].id)}/>
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
export default Assignments