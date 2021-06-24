import React,{useState, useEffect} from 'react'
import UserService from '../services/userService'
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Courseform from './Courseform'


function Courses() {
 

    const [user,setUser] = useState([])
    const [currentId,setCurrentId]=useState('')
    const [open, setOpen] = useState(false);
    const[isLoaded,setLoaded] =useState(false)
    
    useEffect(()=>{
      if(!isLoaded){
      UserService.getUsers().then((user)=>{setUser(user)});
      }
      setLoaded(true)

      
  },[])
    const handleClickOpen = () => {
   setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
   const handaledelete =(id) =>{
    UserService.deleteUser(id).then(()=>{
      
    }).catch((e)=>{
      console.log(e)
    })
    setCurrentId('')
   }
  const addorEdit =e=>{
    if(currentId ===''){
//create function
UserService.createUser(e).then(()=>{
  console.log("created new item successfully!")
  
}).catch((e)=>{
  console.log("failled to create a new user")
});
    } else 
    //update
    UserService.updateUser(currentId,e).then(()=>{
      console.log("user Updated successfully")
    }).catch((e)=>{
      console.log("failed to Updated a user")
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
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
          {
              
              Object.keys(user).map(id =>{
                  return < tr key={id}>
                      <td>{user[id].first_name}</td>
                      <td>{user[id].last_name}</td>
                      <td>{user[id].email}</td>
                      <td>{user[id].role}</td>
                      <td>
                      <a className ="btn text-primary" onClick ={() => {setCurrentId(id)}}>
                                        <CreateIcon onClick ={handleClickOpen(id)}/></a> 
                                <a className ='btn text-danger'>
                                   <DeleteIcon onClick={handaledelete(id)}/>
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

export default Courses
