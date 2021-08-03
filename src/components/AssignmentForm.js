import React ,{useState, useEffect} from 'react'
import TextField from '@material-ui/core/TextField';

const AssignmentForm =(props)=> {
    const initialvalues ={
        title: "",
        description: "",
    } 
    var [values, setValues] = useState({title: "", description: "",})
    useEffect(()=>{
        if(props.currentId ==='')
        setValues({
            ...initialvalues
        })
        else
        setValues({
            ...props.assignment[props.currentId]
        })
    },[props.currentId,props.user])
    const handleInputChnage = e=>{
        var {title, value} =e.target
        setValues({
            ...values,
            [title]: value        })
    }
    const handleFormSubmit =e =>{
        e.preventDefault();
        props.addorEdit(values);
    }
    return (
      <form autoComplete ="off" onSubmit ={handleFormSubmit}>
      <div className ="form-group input-group">
          <div className ="input-group-prepend">
              <div className ="input-group-text">
                <i className = "fas fa-user">
                    </i>  
              </div>
          </div>
          <input className ="form-control" placeholder ="title" title="title" value = {values.title} onChange ={ handleInputChnage}/>
      </div>
      <div className="form-row">
      <div className ="form-group input-group col-md-6">
          <div className ="input-group-prepend">
              <div className ="input-group-text">
                <i className = "fas fa-mobile-alt">
                    </i>  
              </div>
          </div>
          <input className ="form-control" placeholder ="description" title="description" value = {values.description}  onChange ={handleInputChnage}/>
      </div>
      <div className ="form-group input-group col-md-6">
          <div className ="input-group-prepend">
              <div className ="input-group-text">
                <i className = "fas fa-envelope">
                    </i>  
              </div>
          </div>
      </div>
      <div className ="form-group">
          <textarea className ="form-control" placeholder ="content" title="content" value={values.content } onChange ={ handleInputChnage}/>
      </div>
      </div>
      <div className ="form-group">
          <input type= "submit" value ="Save" className ="btn btn-primary btn-block"/>
      </div>
      </form>
  );
}

export default AssignmentForm