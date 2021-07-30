import React, {Component} from 'react'
import { useSelector } from 'react-redux'

function Profile () { 
    const user = useSelector(state => state.user)
    return (
      <form>
        <h1>My Profile</h1>
        <h2>Basic Information</h2>
        <p>Name : {user.first_name} {user.last_name}</p>
        <p>Email : {user.email}</p>
        <p>Role : {user.role}</p>
      </form>
    );
}

export default Profile