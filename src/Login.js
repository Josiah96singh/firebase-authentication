import React, { Component } from "react";
import "./App.css";
import fire from "./config/Firekey";
import firebase from "firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import google_login from "./Components/Images/google_login.png";

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
    //   alert("Please enter an email address");
    //   return;
    // }
    // if (password.length < 4) {
    //   alert("Please enter a strong password");
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

  // onFacebookLogin = e => {
  //   var provider = new firebase.auth.FacebookAuthProvider();
  //   firebase
  //     .auth()
  //     .signInWithPopup(provider)
  //     .then(function(result) {
  //       // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  //       var token = result.credential.accessToken;
  //       // The signed-in user info.
  //       var user = result.user;
  //       // ...
  //     })
  //     .catch(function(error) {
  //       // Handle Errors here.
  //       var errorCode = error.code;
  //       var errorMessage = error.message;
  //       // The email of the user's account used.
  //       var email = error.email;
  //       // The firebase.auth.AuthCredential type that was used.
  //       var credential = error.credential;
  //       // ...
  //     });
  // };

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
          <button type="submit" onClick={this.onLogin} className="btn">
            Login
          </button>
          <button type="submit" onClick={this.onSignup} className="btn">
            Signup
          </button>
          <img
            className="btn_google"
            onClick={this.onGoogleLogin}
            src={google_login}
          />
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
