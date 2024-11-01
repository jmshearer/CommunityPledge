const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// JSONP endpoint to receive data
app.get('/report', (req, res) => {
    const callback = req.query.callback; // JSONP callback parameter
    const option = req.query.option;
    const placeIdentifier = req.query.placeIdentifier;
    const timestamp = req.query.timestamp;

    // Log the received data (or store it in a database)
    console.log('Data received:', { option, placeIdentifier, timestamp });

    // Response data
    const response = {
        success: true,
				message: "Data received",
        option: option,
        placeIdentifier: placeIdentifier,
        timestamp: timestamp
    };

    // Send JSONP response
    if (callback) {
        res.type('application/javascript');
        res.send(`${callback}(${JSON.stringify(response)})`);
    } else {
        res.status(400).send('Callback parameter is required for JSONP.');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
