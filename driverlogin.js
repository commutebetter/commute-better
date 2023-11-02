
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
  import { getAuth,createUserWithEmailAndPassword,} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDnF0p6QFEku_pMYrfTLUCmkOY08Gfo1a0",
    authDomain: "commute-better-c29d5.firebaseapp.com",
    databaseURL: "https://commute-better-c29d5-default-rtdb.firebaseio.com",
    projectId: "commute-better-c29d5",
    storageBucket: "commute-better-c29d5.appspot.com",
    messagingSenderId: "113405456116",
    appId: "1:113405456116:web:cfdeee515aaf395d7cb8a1",
    measurementId: "G-SKGHGPK26B"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth()

  //Getting all objects of html
  var firstname =document.getElementById("firstname")
  var lastname =document.getElementById("lastname")
  var driverlicense =document.getElementById("driverlicense")
  var phonenumber =document.getElementById("phonenumber")
  var email =document.getElementById("email")
  var password =document.getElementById("password")

  //fuction for starting data
  window.signup = function(e){
    e.preventDefault();
    var obj = {
        firstname:firstname.value, 
        lastname:lastname.value, 
        driverlicense:driverlicense.value, 
        phonenumber:phonenumber.value, 
        email:email.value,
        password:password.value,
    }
    createUserWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function(success){
        alert("Your Signup Was Successfull") 
    })
    .catch(function(err){
        alert("error" * err)
    })
    console.log(obj)
  };

