// signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    // sign up the user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {

        firebase.auth().currentUser.sendEmailVerification()
  .then(() => {
    // Email verification sent!
    // ...
  });
        // reset the form and show verification message
        signupForm.reset();
        signupForm.querySelector('.signup-error').innerHTML = ' ';
        document.getElementById("verify-message").innerHTML = "Thanks for signing up! Please check your email and verify it with the link you recieved from 'WWTBAB.'" + "<br> Then, come back to this page and sign in to your account to start playing.";
    }).catch(err => {
      signupForm.querySelector('.signup-error').innerHTML = err.message;
    });
});

function signOut(){
// logout
  auth.signOut().then(() => {
    console.log('user signed out');
    window.location.replace("login.html");
  });
}

// login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;
  window.localStorage.setItem('email', email);

  // fetch & save today's date
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
  var yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;
  window.localStorage.setItem('date', today)

  // log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    console.log(cred.user);
    // reset the form
    loginForm.reset();
    loginForm.querySelector('.login-error').innerHTML = '';
    window.location.replace("loggedin.html");
    window.localStorage.setItem('money', "$0")
  }).catch(err => {
    loginForm.querySelector('.login-error').innerHTML = err.message;
  });

});