function validatelogin() {
    const username = document.getElementById("studentname").value.trim();
    const password = document.getElementById("password").value.trim();
    const error = document.getElementById("error");
    const validUsername = "anits";
    const validPassword = "1234";
    if (username === "") {
        error.textContent = "Username is required";
        return false;
    }
    else if (password === "") {
        error.textContent = "Password is required";
        return false;
    }
    if (username === validUsername && password === validPassword) {
        window.location.href = "success.html";
        return false;
    }
    else {
        error.textContent = "Invalid Username or Password!";
        return false;
    }
}