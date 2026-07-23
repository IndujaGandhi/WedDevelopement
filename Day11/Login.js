const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const registeredUsername = localStorage.getItem("registeredUsername");
    const registeredPassword = localStorage.getItem("registeredPassword");

    if(username === registeredUsername && password === registeredPassword) {
        console.log("Login Successful");
        alert("Login Successful");
    } else {
        console.log("Login Failed");
        alert("Invalid username or password");
    }
});