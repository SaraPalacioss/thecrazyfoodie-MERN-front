import React, { Fragment } from "react";
import {Link} from 'react-router-dom';
import '../../../src/index.css';
import '../../styles/auth/LogIn.css';
import Footer from "../../components/layout/Footer";

const LogIn = () => {
  return (
    <Fragment>
      <form 
        className="form-container"
      >
      <h3 className="auth-title">Log in</h3>
        <div className="inline-input">
            <label 
                htmlFor="Email" 
            >Email</label>
            <input
                type="email"
                name="email"
                placeholder="Your email"
                className="input-style"
             />
        </div>
        <div className="inline-input">
            <label 
                htmlFor="Password"
            >Password</label>
            <input
                type="password"
                name="password"
                placeholder="******"
                className="input-style"
            />
        </div>
     
            <button className="button">Log in</button>
     
        <Link to="/register" className="link-text" style={{ textDecoration: "none" }}>You don't have an account, register here</Link>
      </form>
      <Footer />
    </Fragment>
  );
};

export default LogIn;
