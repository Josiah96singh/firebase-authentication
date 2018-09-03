import firebase from "firebase";

var config = {
  apiKey: "AIzaSyBIXnOpMae3mRdnBuqFZdiaFeFYTqa-IMQ",
  authDomain: "authentication-form.firebaseapp.com",
  databaseURL: "https://authentication-form.firebaseio.com",
  projectId: "authentication-form",
  storageBucket: "authentication-form.appspot.com"
};
const fire = firebase.initializeApp(config);
export default fire;
