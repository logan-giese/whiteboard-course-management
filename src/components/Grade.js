import React ,{useState, useEffect} from 'react'


const Gradeform =(props)=> {
    const initialvalues ={
      SubmissionID: "",
      course_code: "",
      semester_code : "",
      gpa: "",
    } 
    var [values, setValues] = useState({
      submissionID: "",
      course_code: "",
      semester_code : "",
      gpa: "",
    })
    useEffect(()=>{
        if(props.currentId ==='')
        setValues({
            ...initialvalues
        })
        else
        setValues({
            ...props.course[props.currentId]
        })
        
    },[props.currentId,props.course])

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
          <input className ="form-control" placeholder ="SubmissionID" name="title" value = {values.submissionID} onChange ={ handleInputChnage}/>
      </div>
      <div className="form-row">
      <div className ="form-group input-group col-md-6">
          <div className ="input-group-prepend">
              <div className ="input-group-text">
                <i className = "fas fa-mobile-alt">
                    </i>  
              </div>
          </div>
          <input className ="form-control" placeholder ="Course Code" name="course_code" value = {values.course_code}  onChange ={handleInputChnage}/>
      </div>
      <div className ="form-group input-group col-md-6">
          <div className ="input-group-prepend">
              <div className ="input-group-text">
                <i className = "fas fa-envelope">
                    </i>  
              </div>
          </div>
          <input className ="form-control" placeholder ="Semester Code" name="semester_code" value = {values.semester_code}
           onChange ={handleInputChnage}/>
      </div>
      <div className ="form-group">
          <input className ="form-control" placeholder ="GPA" name="gpa" value={values.gpa} onChange ={ handleInputChnage}/>
      </div>
     
      </div>
      <div className ="form-group">
          <input type= "submit" value ="Save" className ="btn btn-primary btn-block"/>
      </div>
      </form>
        
    
  );
}

export default Gradeform