import React, {useState, useEffect  }  from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  input
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import UserService from '../services/userService';

const Profile = (props) => {
  const user = useSelector(state => state.user);
  
  const [values, setValues] = useState({
      first_name: "",
      last_name: "",
      email: "",
      role: 0,
  });
  
  useEffect(() => {
    setValues(user);
  }, []);
  
  const handleSubmit = e => {
    e.preventDefault();
    UserService.updateUser(user.id, values).then(() => {
      console.log("User updated successfully");
    }).catch((e) => {
      console.log(e);
    })
  }

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div>
      <form>
        <h1>Profile</h1>
        <h2>Basic Information</h2>
        <p>Name : {user.first_name} {user.last_name}</p>
        <p>Email : {user.email}</p>
        <p>Role : {user.role}</p>
      </form>
      <br />
      <Card style={{backgroundColor: ""}}>
        <CardHeader
          subheader="The information can be edited"
          title="Profile"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <input
                helpertext="Please specify the first name"
                name="first_name"
                onChange={handleChange}
                required
                value={values.first_name}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <input
                name="last-name"
                onChange={handleChange}
                required
                value={values.last_name}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <input
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <input
                name="role"
                onChange={handleChange}
                type="number"
                value={values.role}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
            onClick ={handleSubmit}
            style={{backgroundColor: '#808080', color: '#FFFFFF'}}
          >
            Update Profile
          </Button>
        </Box>
      </Card>
    </div>
  );
};

export default Profile;
