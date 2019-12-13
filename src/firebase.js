import * as firebase from 'firebase';
 var firebaseConfig = {
    apiKey: "AIzaSyBCtlg2CYN1CJ91kAdZ-vwSxCXmRCFH6qo",
    authDomain: "spear-252212.firebaseapp.com",
    databaseURL: "https://spear-252212.firebaseio.com",
    projectId: "spear-252212",
    storageBucket: "spear-252212.appspot.com",
    messagingSenderId: "1008886206214",
    appId: "1:1008886206214:web:89bc753e262463bb0d1887",
    measurementId: "G-1XY7NK2N4J"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export const clothesDB= firebase.database().ref('/clothes');
  export const userDB=firebase.database().ref('/users');
  export const auth = firebase.auth();