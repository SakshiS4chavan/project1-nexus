 function validateSignUpForm(event) {
    event.preventDefault();

   
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
     const errorMessage = document.getElementById('error-message');

 
    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match';
        return;
    }

   
    alert('Sign up successful!');
}

