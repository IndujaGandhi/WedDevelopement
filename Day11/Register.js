const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("regUsername").value;
    const password = document.getElementById("regPassword").value;

    localStorage.setItem("registeredUsername", username);
    localStorage.setItem("registeredPassword", password);

    console.log("Registration Successful");
    window.location.href = "Login.html";
}); 