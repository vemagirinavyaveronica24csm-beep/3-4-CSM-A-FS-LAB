const os = require("os");
const path = require("path");
const dns = require("dns");
const net = require("net");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function osInformation() {
    console.log("\n===== OS INFORMATION =====");
    console.log("Operating System Platform:", os.platform());
    console.log("CPU Architecture:", os.arch());
    console.log("\nCPU Information:");
    console.log(os.cpus());
    console.log("\nTotal Memory:", os.totalmem(), "bytes");
    console.log("Free Memory:", os.freemem(), "bytes");
    showMenu();
}
function pathInformation() {
    rl.question("\nEnter a file path: ", function(filePath) {
        console.log("\n===== PATH INFORMATION =====");
        console.log("Directory Name:", path.dirname(filePath));
        console.log("File Name:", path.basename(filePath));
        console.log("Extension:", path.extname(filePath));
        console.log("Normalized Path:", path.normalize(filePath));
        showMenu();
    });
}
function dnsInformation() {
    rl.question("\nEnter a domain name: ", function(domain) {
        console.log("\n===== DNS INFORMATION =====");
        dns.lookup(domain, function(error, address, family) {
            if (error) {
                console.log("Error:", error.message);
            } 
            else {
                console.log("Domain Name:", domain);
                console.log("IP Address:", address);
                console.log("IP Version:", family);
            }
            showMenu();
        });
    });
}
function startServer() {
    const PORT = 5000;
    const server = net.createServer(function(socket) {
        console.log("\nClient connected!");
        socket.write("Welcome to the Node.js TCP Server!");
        socket.on("data", function(data) {
            console.log("Message from client:", data.toString());
        });
        socket.on("end", function() {
            console.log("Client disconnected.");
        });
    });
    server.listen(PORT, function() {
        console.log("\n===== TCP SERVER =====");
        console.log("Server is running on port", PORT);
        console.log("Waiting for client...");
    });
    server.on("error", function(error) {
        console.log("Server Error:", error.message);
    });
}
function startClient() {
    const PORT = 5000;
    const client = new net.Socket();
    client.connect(PORT, "localhost", function() {
        console.log("\n===== TCP CLIENT =====");
        console.log("Client connected to server.");
        client.write("Hello Server! This is the TCP Client.");
    });
    client.on("data", function(data) {
        console.log("Message from server:", data.toString());
        client.end();
    });
    client.on("close", function() {
        console.log("Client connection closed.");
    });
    client.on("error", function(error) {
        console.log("Client Error:", error.message);
    });
}
function showMenu() {
    console.log("\n==============================");
    console.log(" NODE.JS SYSTEM APPLICATION");
    console.log("==============================");
    console.log("1. OS Information");
    console.log("2. Path Information");
    console.log("3. DNS Lookup");
    console.log("4. Start TCP Server");
    console.log("5. Start TCP Client");
    console.log("6. Exit");
    rl.question("\nEnter your choice: ", function(choice) {
        switch (choice) {
            case "1":
                osInformation();
                break;
            case "2":
                pathInformation();
                break;
            case "3":
                dnsInformation();
                break;
            case "4":
                startServer();
                break;
            case "5":
                startClient();
                break;
            case "6":
                console.log("\nProgram exited.");
                rl.close();
                break;
            default:
                console.log("\nInvalid choice. Please try again.");
                showMenu();
        }
    });
}
showMenu();
