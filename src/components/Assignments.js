import React, {useState, useEffect} from 'react';
import AssignmentService from '../services/assignmentservice';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AssignemntForm from './AssignmentForm';


function Assignments() {
    const [assignment, setAssignment] = useState([])
    const [currentId, setCurrentId] = useState('')
    const [open, setOpen] = useState(false);
    
    useEffect(() => {
      AssignmentService.getAssignment().then((Assignment) => {
        setAssignment(assingment);
      });
    }, []);
    
    const handleClickOpen = () => {
   setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
   const handleDelete =(id) =>{
    AssignmentService.deleteAssignment(id).then(()=>{
      
    }).catch((e)=>{
      console.log(e)
    })
    setCurrentId('')
   }
   const addorEdit = (e) =>{
    if(currentId ===''){
    //create function
      AssignmentService.createAssignment(e).then(()=>{
        console.log("created assignment")

     }).catch((e)=>{
        console.log("failed to create assignment")
      });
    } 
    else 
      //update
      UserService.updateUser(currentId,e).then(()=>{
        console.log("assignment created successfully")
        }).catch((e)=>{
          console.log("assignment creation failed")
        })
      setCurrentId('')
    }
    
  return (
       
    <div className="table">
    <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        AddUser
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Add or Edit page
          </DialogContentText>
        <Courseform {...({addorEdit, currentId, user})}/>
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
              <th>link to object</th>
            </tr>
        </thead>
        <tbody>
          { 
            Object.keys(assignment).map(id =>{
              return < tr key={id}>
                      <td>{assignment[id].first_name}</td>
                      <td>{assignment[id].data}</td>
                      <td>
                      <a className ="btn text-primary" onClick ={() => {setCurrentId(id)}}>
                                        <CreateIcon onClick ={() => handleClickOpen(id)}/></a> 
                                <a className ='btn text-danger'>
                                   <DeleteIcon onClick={() => handaledelete(id)}/>
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