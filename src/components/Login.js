import React from "react";
const Login = (props) => {
  const {
    email,
    setEmail,
    confirmPassword,
    setConfirmPassword,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    confirmPasswordError,
    password,
    setPassword,
    forgotPassword,
    setForgotPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
    nameError,
    resetPassword,
    loading,
  } = props;

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
        />
        <p className="errorMsg">{emailError}</p>
        {forgotPassword ? (
          <div>
            <button className="resetbtn" onClick={() => resetPassword(email)}>
              {loading ? "Sending email..." : "Reset"}
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
                />
                <p className="errorMsg">{confirmPasswordError}</p>
                <label>First Name</label>
                <input
                  type="text"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <label>Last Name</label>
                <input
                  type="text"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <p className="errorMsg">{nameError}</p>
              </div>
            )}
            <div className="btnContainer">
              {hasAccount ? (
                <>
                  <button onClick={handleLogin}>
                    {loading ? "Signing in..." : "Sign In"}
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
                  <button onClick={handleSignUp}>
                    {loading ? "Creating Account..." : "Sign Up"}
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
