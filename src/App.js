import React, { Component } from "react";
import "./App.css";
import Home from "./Home";
import Login from "./Login";
import fire from "./config/Firekey";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      // console.log(user);
      if (user) {
        // User is signed in.
        this.setState({ user });
      } else {
        // No user is signed in.
        this.setState({ user: null });
      }
    });
  }

  render() {
    return <div className="app">{this.state.user ? <Home /> : <Login />}</div>;
  }
}

export default App;
