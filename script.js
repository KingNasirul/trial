document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    alert(`Login with Email: ${email} and Password: ${password}`);
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    alert(`Sign Up with Name: ${name}, Email: ${email} and Password: ${password}`);
});
