import React, { Component } from "react";
import "./App.css";
import fire from "./config/Firekey";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSignup = this.onSignup.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSignup = e => {
    e.preventDefault();
    try {
      fire
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password);
    } catch (error) {
      console.log(error.toString());
    }
  };

  onLogin = e => {
    e.preventDefault();
    try {
      fire
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password);
    } catch (error) {
      console.log(error.toString());
    }
  };

  render() {
    return (
      <div className="form">
        <h2>Login</h2>
        <div className="line" />
        <div className="input_boxes">
          <input
            value={this.state.email}
            name="email"
            className="input_box"
            placeholder="Email"
            onChange={this.handleChange}
          />
          <input
            value={this.state.password}
            type="password"
            name="password"
            className="input_box"
            placeholder="Password"
            onChange={this.handleChange}
          />
        </div>
        <div className="btns">
          <button
            type="submit"
            onClick={this.onLogin.bind(this)}
            className="btn"
          >
            Login
          </button>
          <button
            type="submit"
            onClick={this.onSignup.bind(this)}
            className="btn"
          >
            Signup
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
