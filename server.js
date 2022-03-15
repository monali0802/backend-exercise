// Create express app
const express = require("express");
const app = express();

require('./routes/pairs')(app);

// Root endpoint
app.get("/", (req, res, next) => {
	res.json({"message":"Ok"})
});

// Server port
var PORT = 3000

// Start server
app.listen(PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",PORT))
});
