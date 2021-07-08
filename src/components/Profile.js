
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
import UserService from '../services/userService';
import UserServiceTest from './test/UserServiceTest';



const Profile = (props) => {
  const [values, setValues] = useState({
      first_name: "",
      last_name: "",
      email: "",
      role: 0,
  } );
  useEffect(() => {
    UserService.getUserById("IVgTk03HogEQyQrlK2MJ").then((values) => {
      setValues(values);
    });
  }, []);
  const handleSubmit =e =>{
    e.preventDefault();
    UserService.updateUser("IVgTk03HogEQyQrlK2MJ",values).then(()=>{
      console.log("user Updated successfully")
    }).catch((e)=>{
      console.log(e)
    })
 
}

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    
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
    
  );
};

export default Profile;
