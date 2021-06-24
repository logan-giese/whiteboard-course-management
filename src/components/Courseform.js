import React ,{useState, useEffect} from 'react'
import TextField from '@material-ui/core/TextField';

const Courseform =(props)=> {
    const initialvalues ={
        first_name: "",
        last_name: "",
        email: "",
        role: 0,
    } 
    var [values, setValues] = useState({})
    useEffect(()=>{
        if(props.currentId ==='')
        setValues({
            ...initialvalues
        })
        else
        setValues({
            ...props.user[props.currentId]
        })
        
    },[props.currentId,props.user])

    const handleInputChnage = e=>{
        var {name, value} =e.target
        setValues({
            ...values,
            [name]: value        })
    }
    const handleFormSubmit =e =>{
        e.preventDefault();
        props.addorEdit(values);
    }
    return (
    <form autoComplete ="off" onSubmit ={handleFormSubmit}>
          <TextField
            autoFocus
            margin="dense"
            id="firstname"
            label="First Name"
            name="first_name"
            value ={values.first_name}
            onChange ={ handleInputChnage}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="lastname"
            label="Last Name"
            name="last_name"
            value ={values.last_name}
            onChange ={handleInputChnage}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            name="email"
            value ={values.email}
            onChange ={ handleInputChnage}
            fullWidth
          />
             <TextField
            autoFocus
            margin="dense"
            id="role"
            label="role"
            name="role"
            type="number"
            value ={values.role}
            InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            onChange ={handleInputChnage}
            fullWidth
          />
        <div className ="form-group">
            <input type= "submit" value ="Save" className ="btn btn-primary btn-block"/>
        </div>
        </form>
        
    
  );
}

export default Courseform