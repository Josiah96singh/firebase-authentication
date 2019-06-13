import firebase from "firebase";

var config = {
  apiKey: "AIzaSyAj9KvMIYnUAXozBUUiwCPYSbg67yn0a2c",
  authDomain: "myfirstreactapp-141a2.firebaseapp.com",
  databaseURL: "https://myfirstreactapp-141a2.firebaseio.com",
  projectId: "myfirstreactapp-141a2",
  storageBucket: "myfirstreactapp-141a2.appspot.com"
};
const fire = firebase.initializeApp(config);
export default fire;
