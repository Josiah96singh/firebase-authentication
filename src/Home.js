import React, { Component } from "react";
import "./App.css";
import fire from "./config/Firekey";
import { toast } from "react-toastify";

class Home extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    fire.auth().signOut();
    toast.success("Logged Out");
  }

  render() {
    return (
      <div>
        <h1>Congratulations!</h1>
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

export default Home;
