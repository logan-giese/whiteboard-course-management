import React, { useState } from "react";
const Login = (props) => {
  const {
    email,
    setEmail,
    confirmPassword,
    setConfirmPassword,
    confirmPasswordError,
    password,
    setPassword,
    forgotPassword,
    setForgotPassword,
    handleLogin,
    handlesignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
    resetPassword,
    loading,
    setLoading,
    user,
    setUser
  } = props;

  const handleKeypress = e => {
  if (e.charCode === 13) {
    if (hasAccount)
      handleLogin();
    else
      handlesignUp();
  }
  };

  return (
   
    <section className="login">
      <div className="loginContainer">
        <h1 className="head" align="center">
          Welcome{" "}
        </h1>
        <label>Email</label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyPress={handleKeypress}
        />
        <p className="errorMsg">{emailError}</p>
        {forgotPassword ? (
          <div>
            <button className="resetbtn" onClick={() => resetPassword(email)}>
              {loading ? "Sending email.." : "Reset"}
            </button>
            <button onClick={() => setForgotPassword(!setForgotPassword)}>
              Back
            </button>
          </div>
        ) : (
          <div>
            <label>Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeypress}
            />
            <p className="errorMsg">{passwordError}</p>
            {hasAccount ? (
              ""
            ) : (
              <div className="confirmPassword">
                <label>Confirm Password</label>
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onKeyPress={handleKeypress}
              
                />
                <p className="errorMsg">{confirmPasswordError}</p>
              </div>
            )}
            <div className="btnContainer" >
              {hasAccount ? (
                <>
                  <button onClick={handleLogin}type="submit">
                    {loading ? "Signing in.." : "Sign In"}
                  </button>
                  <p>
                    {" "}
                    <span onClick={() => setHasAccount(!hasAccount)}>
                      Sign Up
                    </span>
                  </p>
                  <p>
                    <span onClick={() => setForgotPassword(!forgotPassword)}>
                      Forgot Password ?
                    </span>
                  </p>
                </>
              ) : (
                <>
                  <button onClick={handlesignUp}>
                    {loading ? "Creating Account.." : "Sign Up"}
                  </button>
                  <p>
                    {" "}
                    Already have an account ?
                    <span onClick={() => setHasAccount(!hasAccount)}>
                      Sign In
                    </span>
                  </p>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
    
  );
};

export default Login;
