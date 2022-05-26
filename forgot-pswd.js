const forgotForm = document.querySelector('#reset-form');
forgotForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById("forgot-pswd-email").value;

    firebase.auth().sendPasswordResetEmail(email)
  .then(() => {
    // Password reset email sent!
    document.getElementById("verify-message").innerHTML = "Password Reset Link Sent!";
    forgotForm.querySelector('.reset-error').innerHTML = ' ';
    // ..
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    forgotForm.querySelector('.reset-error').innerHTML = errorMessage;
    // ..
  });
});