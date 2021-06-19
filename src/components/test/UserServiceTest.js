import React, { useState } from 'react';
import UserService from '../../services/userService.js';

// Full user service test component
const UserServiceTest = () => {
    const [users, setUsers] = useState([]);
    const [specificUser, setSpecificUser] = useState({});
    
    const [newUser, setNewUser] = useState({
        first_name: "",
        last_name: "",
        email: "",
        role: 0,
    });
    const newUserChanged = (e) => {
        setNewUser({...newUser, [e.target.name]: e.target.value});
    }
    
    const [editableUser, setEditableUser] = useState({
        id: "YQd8vjTZfmO1mdFQqBYs",
        first_name: "",
        last_name: "",
        email: "",
        role: 0,
    });
    const editableUserChanged = (e) => {
        setEditableUser({...editableUser, [e.target.name]: e.target.value});
    }
    
    return <div>
        {/* Get users test */}
        <button type="button" className="btn btn-primary" onClick={
            async () => {
                setUsers(await UserService.getUsers());
                setSpecificUser(await UserService.getUserById("SMJew4upEgdPMzlkxGhU"));
                setEditableUser(await UserService.getUserById(editableUser.id));
                console.log(users);
            }
        }>Get Users</button>
        <br/><br/>
        <h3>Users:</h3>
        {users.map((user) => {
            // return <UserInfo key={user.id} user={user} />
        })}
        
        {/* Get specific user test */}
        <h3>Specific User:</h3>
        {/* <UserInfo user={specificUser} /> */}
        
        {/* Add user test */}
        <h3>Add User:</h3>
        <form>
            <input type="text" placeholder="First name" name="first_name" onChange={newUserChanged} />
            <input type="text" placeholder="Last name" name="last_name" onChange={newUserChanged} /><br/>
            <input type="text" placeholder="Email" name="email" onChange={newUserChanged} />
            <input type="number" placeholder="Role" name="role" defaultValue="0" onChange={newUserChanged} /><br/><br/>
            <button className="btn btn-secondary" onClick={async (e) => {
                e.preventDefault();
                console.log("User created with ID: " + await UserService.createUser(newUser));
            }}>Add User</button>
        </form><br/>

        {/* Update user test */}
        <h3>Update User:</h3>
        <form>
            <input type="text" placeholder="ID" name="id" value={editableUser.id} onChange={editableUserChanged} />
            <input type="text" placeholder="First name" name="first_name" value={editableUser.first_name} onChange={editableUserChanged} />
            <input type="text" placeholder="Last name" name="last_name" value={editableUser.last_name} onChange={editableUserChanged} /><br/>
            <input type="text" placeholder="Email" name="email" value={editableUser.email} onChange={editableUserChanged} />
            <input type="number" placeholder="Role" name="role" value={editableUser.role} defaultValue="0" onChange={editableUserChanged} /><br/><br/>
            <button className="btn btn-secondary" onClick={async (e) => {
                e.preventDefault();
                await UserService.updateUser(editableUser.id, editableUser);
                console.log("User updated");
            }}>Update User</button>
        </form>
    </div>
}

// User information test component (takes "user" property)
// const UserInfo = (props) => {
//     const user = props.user;
//     return (
//         <div>
//             {/* ID: {user.id}<br/>
//             Name: {user.first_name} {user.last_name}<br/>
//             Email: {user.email}<br/>
//             Role: {user.role}<br/>
//             Enrolled Courses:
//             <ul>
//             {user.enrolled_courses?.map((course) => {
//                 return <li key={course}>{course}</li>
//             })}
//             </ul>
//             Assigned Courses:
//             <ul>
//             {user.assigned_courses?.map((course) => {
//                 return <li key={course}>{course}</li>
//             })} */}
//             </ul><br/>
//         </div>
//     )
// }

export default UserServiceTest;
