function validatelogin() {
    const usernameInput = document.getElementById("studentname");
    const passwordInput = document.getElementById("password");
    const errorElement = document.getElementById("error");

    if (errorElement) {
        errorElement.textContent = "";
    }

    const username = usernameInput ? usernameInput.value.trim() : "";
    const password = passwordInput ? passwordInput.value.trim() : "";

    const validUsername = "anits";
    const validPassword = "1234";

    if (username === "") {
        if (errorElement) errorElement.textContent = "Username is required";
        return false;
    } 
    
    if (password === "") {
        if (errorElement) errorElement.textContent = "Password is required";
        return false;
    }

    if (username === validUsername && password === validPassword) {
        window.location.href = "success.html";
        return false;
    } else {
        if (errorElement) errorElement.textContent = "Invalid Username or Password!";
        return false;
    }
}