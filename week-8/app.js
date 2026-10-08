const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Registration route
app.post("/register", (req, res) => {
  const newUser = {
    name: req.body.name,
    age: req.body.age,
    dob: req.body.dob,
    gender: req.body.gender,
    email: req.body.email,
    mobile: req.body.mobile,
    username: req.body.username,
    password: req.body.password,
    address: req.body.address
  };

  fs.readFile("users.json", "utf8", (err, data) => {
    let users = [];
    if (!err && data.trim() !== "") {
      users = JSON.parse(data);
    }
    users.push(newUser);

    fs.writeFile("users.json", JSON.stringify(users, null, 2), (err) => {
      if (err) {
        res.send("Error saving data");
      } else {
        res.send(`<h2>Registration Successful!</h2>
                  <a href="/login">Go to Login</a>`);
      }
    });
  });
});

// Serve pages
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "register.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});

// Login route
app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  fs.readFile("users.json", "utf8", (err, data) => {
    if (err) {
      res.send("Error reading data");
      return;
    }

    const users = JSON.parse(data);
    const user = users.find(
      u => (u.username === username || u.email === username) && u.password === password
    );

    if (user) {
      res.sendFile(path.join(__dirname, "public", "dashboard.html"));
    } else {
      res.send(`<h2>Invalid Username or Password</h2>
                <a href="/login">Try Again</a>`);
    }
  });
});

// Logout route
app.get("/logout", (req, res) => {
  res.redirect("/login");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
