// firebase setting start

var config = {
    apiKey: "AIzaSyDE7KfQzbA-XZLkXkbZDozH57ypm6falck",
authDomain: "ankit-farming.firebaseapp.com",
projectId: "ankit-farming",
storageBucket: "ankit-farming.appspot.com",
messagingSenderId: "295079238657",
appId: "1:295079238657:web:c3f11c59f8a1e083083400"
  };
  firebase.initializeApp(config);
  
  // make auth and firestore references
  const auth = firebase.auth();
  const db = firebase.firestore();

  // update firestore settings
  db.settings({ timestampsInSnapshots: true });

  // firebase settings end
function createUser(){
    let username=document.getElementById("username").value;
    let email=document.getElementById("email").value;
    let pass=document.getElementById("pass").value; // this is should be atleast 6 character

    auth.createUserWithEmailAndPassword(email,pass)
    .then((data)=>{
        let curr_user=data.user;
        alert("User Created")
        console.log(curr_user);
        window.location.replace("/login/index.html");
    })
    .catch(err=>{
        alert(err.message)
    })

    console.log(username,email,pass);
}

function loginUser(){
    let email=document.getElementById("email-login").value;
    let pass=document.getElementById("pass-login").value; // 
    
    auth.signInWithEmailAndPassword(email,pass)
    .then((data)=>{
        let curr_user=data;
        alert("Login");
        console.log(curr_user);
        window.location.replace("/");
    })
    .catch(err=>{
        alert("Wrong Credentials")
    })
}


function logOut(){
    
    auth.signOut();

    document.getElementById("navbar-logout").style.display="none";
    document.getElementById("navbar-signin").style.display="block";
    
}




