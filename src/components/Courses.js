import React,{useState, useEffect} from 'react'
import UserService from '../services/userService'
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import Registering from "./Registering"


function Courses() {
 

    const [user,setUser] = useState([])
    const [currentId,setCurrentId]=useState('')
  
    UserService.getUsers().then((user)=>{setUser(user)});
  return (
       
    <div className="table">
    
        {/* <button type="button" className="btn btn-primary" onClick={
            async () => {
                setUser(await UserService.getUsers());}}
                >Get Users</button>     */}
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
                                    <CreateIcon/></a> 
                                <a className ='btn text-danger'>
                                   <DeleteIcon/>
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
