import React, { Component } from "react";
import "./App.css";
import fire from "./config/Firekey";
import firebase from "firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import google_btn from "./Components/Images/google.svg";
import firebase_icon from "./Components/Images/firebase.svg";

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
    this.onGoogleLogin = this.onGoogleLogin.bind(this);
    // this.onFacebookLogin = this.onFacebookLogin.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSignup = e => {
    e.preventDefault();
    var { email, password } = this.state;

    // if (email.length < 4) {
    //   alert("Please enter a valid email address");
    //   return;
    // }
    // if (password.length < 4) {
    //   alert("Please enter a stronger password");
    //   return;
    // }
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        if (errorCode) {
          alert("User exists");
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
  };

  onLogin = e => {
    e.preventDefault();
    var { email, password } = this.state;

    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        if (errorCode === "auth/user-not-found") {
          alert("User not found");
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
  };

  onGoogleLogin = e => {
    var provider = new firebase.auth.GoogleAuthProvider();
    fire
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(user);
        // ...
      })
      .catch(function(error) {
        console.log(error);
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };

  render() {
    return (
      <div className="form">
        <div className="header">
          <img src={firebase_icon} />
          <h3>Firebase Authentication</h3>
        </div>
        <br />
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
          <button type="submit" onClick={this.onLogin} className="btn">
            Sign in
          </button>
          <button type="submit" onClick={this.onSignup} className="btn">
            Signup
          </button>
          <button className="btn_google" onClick={this.onGoogleLogin}>
            <img src={google_btn} />
          </button>

          {/* <button type="submit" onClick={this.onFacebookLogin} className="btn">
            Facebook
          </button> */}
        </div>
        <ToastContainer />
      </div>
    );
  }
}

export default Login;
