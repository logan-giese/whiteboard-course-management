import React ,{useState, useEffect} from 'react'
import TextField from '@material-ui/core/TextField';

const AssignmentForm =(props)=> {
    const initialvalues ={
        name: "",
        data: "",
    } 
    var [values, setValues] = useState({})
    useEffect(()=>{
        if(props.currentId ==='')
        setValues({
            ...initialvalues
        })
        else
        setValues({
            ...props.assignment[props.currentId]
        })

    const handleInputChnage = e=>{
        var {id, value} =e.target
        setValues({
            ...values,
            [id]: value        })
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
            id="Assignment id"
            label="Assignment Name"
            value ={values.name}
            onChange ={ handleInputChnage}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="Data"
            label="Data"
            name="Data"
            value ={values.data}
            onChange ={handleInputChnage}
            fullWidth
          />
        <div className ="form-group">
            <input type= "submit" value ="Save" className ="btn btn-primary btn-block"/>
        </div>
        </form>
        
    
  );
}

export default AssignmentForm