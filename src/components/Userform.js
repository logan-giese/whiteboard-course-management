import React ,{useState, useEffect} from 'react'


const Userform =(props)=> {
    const initialvalues ={
        first_name: "",
        last_name: "",
        email: "",
        role: 0,
    } 
    var [values, setValues] = useState({ 
        first_name: "",
    last_name: "",
    email: "",
    role: 0,})
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
      <div className ="form-group input-group">
          <div className ="input-group-prepend">
              <div className ="input-group-text">
                <i className = "fas fa-user">
                    </i>  
              </div>
          </div>
          <input className ="form-control" placeholder ="first name" name="first_name" value = {values.first_name} onChange ={ handleInputChnage}/>
      </div>
      <div className="form-row">
      <div className ="form-group input-group col-md-6">
          <div className ="input-group-prepend">
              <div className ="input-group-text">
                <i className = "fas fa-mobile-alt">
                    </i>  
              </div>
          </div>
          <input className ="form-control" placeholder ="last name" name="last_name" value = {values.last_name}  onChange ={handleInputChnage}/>
      </div>
      <div className ="form-group input-group col-md-6">
          <div className ="input-group-prepend">
              <div className ="input-group-text">
                <i className = "fas fa-envelope">
                    </i>  
              </div>
          </div>
          <input className ="form-control" placeholder ="Email" name="email" value = {values.email}
           onChange ={handleInputChnage}/>
      </div>
      <div className ="form-group">
          <textarea className ="form-control" placeholder ="role" name="role" value={values.address } onChange ={ handleInputChnage}/>
      </div>
     
      </div>
      <div className ="form-group">
          <input type= "submit" value ="Save" className ="btn btn-primary btn-block"/>
      </div>
      </form>
        
    
  );
}

export default Userform