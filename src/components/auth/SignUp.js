import React, { Fragment } from "react";
import {Link} from 'react-router-dom';
import '../../../src/index.css';
import '../../styles/auth/SignUp.css';
import Footer from "../../components/layout/Footer";

const SignUp = () => {
  return (
    <Fragment>
      <form 
        className="form-container"
      >
      <h3 className="auth-title">Register</h3>
        <div className="inline-input">
            <label 
                htmlFor="Name" 
                className="label-text">Name</label>
            <input
                type="text"
                name="name"
                placeholder="Your name"
                className="input-style"
             />
        </div>
        <div className="inline-input">
            <label 
                htmlFor="Email" 
                className="label-text">Email</label>
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
                className="label-text"
            >Password</label>
            <input
                type="password"
                name="password"
                placeholder="******"
                className="input-style"
            />
        </div>
        <div className="inline-input">
            <label 
                htmlFor="confirm"
                className="label-text"
            >Confirm password</label>
            <input
                type="password"
                name="password"
                placeholder="******"
                className="input-style"
            />
        </div>
     
            <button className="button">Sign up</button>
     
        <Link to="/login" className="link-text" style={{ textDecoration: "none" }}>You already have an account, log in here</Link>
      </form>
      <Footer />
    </Fragment>
  );
};

export default SignUp;
