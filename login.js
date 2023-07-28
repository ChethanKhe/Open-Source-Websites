var firebaseConfig = {
    apiKey: "AIzaSyB-RstuknA_vor7lC2ek4HpygXyzwloe8I",
    authDomain: "login-form-1c6f3.firebaseapp.com",
    projectId: "login-form-1c6f3",
    storageBucket: "login-form-1c6f3.appspot.com",
    messagingSenderId: "540618933442",
    appId: "1:540618933442:web:cc4af6c47155ee19ff275b",
    measurementId: "G-D16B696L5B"
  };

   // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

   const auth = firebase.auth();

function signUp() {
        console.log 
        var email =document.getElementById("email");
        var password =document.getElementById("password");
        const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
        promise.catch(e=> alert(e.message));
        alert("signed Up")
        window.locationreplace("index.html");
    }

function signIn(){
        var email =document.getElementById("email");
        var password =document.getElementById("password");
        const promise = auth.signInWithEmailAndPassword(email.value, password.value);
        promise.catch(e=> alert(e.message));
        alert("signed In")
        window.location.replace("home.html");
}

auth.onAuthStateChanged (function(user) {
        if (user){
        var email = user.email;
        alert("active Users are there!");
        }else{
        alert("NO Active User");
        }
});

function signOut(){
    auth.signOut();
    alert("Signed out");
    window.location.replace("index.html");
}   
