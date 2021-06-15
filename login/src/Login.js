import React from 'react';
const Login = (props) =>{
    const{email,setEmail,  password, setPassword, handleLogin, handlesignUp,hasAccount,setHasAccount,emailError,passwordError } = props;
    return(
        <section className="login">
<div className = "loginContainer">
    <h1 className = "head" align= "center" >Welcome to Whiteboard </h1>
    <label>Username</label>
    <input type = "text" autoFocus required value = {email} onChange = {(e) => setEmail(e.target.value)}/>
    <p className = "errorMsg">{emailError}</p>
    <label>Password</label>
    <input type ="password"  required value = {password} onChange = {(e) => setPassword(e.target.value)}/>
    <p className = "errorMsg">{passwordError}</p>
    <div className = "btnContainer">
        {hasAccount ? (
            <>
            <button onClick = {handleLogin}>Sign In</button>
            <p> <span onClick = {() => setHasAccount(!hasAccount)}>Sign Up</span></p>
            <p><span>Forgot Password ?</span></p>
            </>
        ):(
            <>
            <button onClick = {handlesignUp}>Sign Up</button>
            <p> Already have an account ?<span onClick = {() => setHasAccount(!hasAccount)}
            >Sign In</span></p>
            
            </>
        )}
    </div>
</div>
        </section>
    )
        

}
export default Login;
