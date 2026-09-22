const express = require("express");
const fs = require("fs");
const os = require("os");
const dns = require("dns");

const app = express();
const PORT = 3000;

// Home route
app.get("/", (req, res) => {
    res.send("Student Course Management System");
});


// ---------------------------------------------------
// 1. GET ALL STUDENTS
// GET http://localhost:3000/students
// ---------------------------------------------------

app.get("/students", (req, res) => {

    fs.readFile("students.json", "utf8", (err, data) => {

        if (err) {
            return res.status(500).send("Error reading student data");
        }

        const students = JSON.parse(data);

        res.json(students);
    });
});


// ---------------------------------------------------
// 2. GET STUDENT BY ID
// GET http://localhost:3000/students/:id
// ---------------------------------------------------

app.get("/students/:id", (req, res) => {

    const studentId = parseInt(req.params.id);

    fs.readFile("students.json", "utf8", (err, data) => {

        if (err) {
            return res.status(500).send("Error reading student data");
        }

        const students = JSON.parse(data);

        const student = students.find(s => s.id === studentId);

        if (!student) {
            return res.status(404).send("Student not found");
        }

        res.json(student);
    });
});


// ---------------------------------------------------
// 3. SEARCH STUDENTS BY COURSE
// GET http://localhost:3000/search?course=Node.js
// ---------------------------------------------------

app.get("/search", (req, res) => {

    const course = req.query.course;

    fs.readFile("students.json", "utf8", (err, data) => {

        if (err) {
            return res.status(500).send("Error reading student data");
        }

        const students = JSON.parse(data);

        const result = students.filter(
            student => student.course.toLowerCase() === course.toLowerCase()
        );

        res.json(result);
    });
});


// ---------------------------------------------------
// 4. SYSTEM INFORMATION
// GET http://localhost:3000/system
// ---------------------------------------------------

app.get("/system", (req, res) => {

    const systemInfo = {
        platform: os.platform(),
        operatingSystem: os.type(),
        architecture: os.arch(),
        hostname: os.hostname(),
        totalMemory: os.totalmem(),
        freeMemory: os.freemem(),
        numberOfCPUs: os.cpus().length
    };

    res.json(systemInfo);
});


// ---------------------------------------------------
// 5. DNS INFORMATION
// GET http://localhost:3000/dns
// ---------------------------------------------------

app.get("/dns", (req, res) => {

    dns.lookup("google.com", (err, address, family) => {

        if (err) {
            return res.status(500).send("DNS lookup failed");
        }

        res.json({
            domain: "google.com",
            ipAddress: address,
            addressFamily: family
        });
    });
});


// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});