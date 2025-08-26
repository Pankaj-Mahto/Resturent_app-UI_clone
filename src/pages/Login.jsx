import React, { useState } from "react";
import "./Login.css"; // we'll style it separately

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="page-container">
      <div className="form-box">
        <h1 className="form-title">{isRegister ? "Register" : "Login"}</h1>

        <form className="form-content">
          {isRegister && (
            <input type="text" placeholder="Full Name" required />
          )}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />

          {isRegister && (
            <input type="password" placeholder="Confirm Password" required />
          )}

          <button type="submit" className="custom__button">
            {isRegister ? "Register" : "Login"}
          </button>
        </form>

        <p className="toggle-text">
          {isRegister ? "Already have an account?" : "Don’t have an account?"}{" "}
          <span onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? "Login" : "Register"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
