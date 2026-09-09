// Loads Express and the mock database.
const express = require("express");
const database = require("./database");

const app = express();

// Allows the server to read JSON request data.
app.use(express.json());

// Serves the frontend files from the public folder.
app.use(express.static("public"));

// Returns all food items from the mock database.
app.get("/foods", (req, res) => {
    console.log("GET /foods");
    res.status(200).json(database.getAll());
});

// Handles requests for routes that do not exist.
app.use((req, res) => {
    res.status(404).json({ error: "Not Found" });
});

// Uses the deployment port or port 3000 for local testing.
const PORT = process.env.PORT || 3000;

// Starts the server.
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;






