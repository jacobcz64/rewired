require('dotenv').config()

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database');
const port = process.env.PORT || 5000;

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.get('/donors', (req, res) => {
    connection.query(
        "SELECT * FROM Donor LIMIT 3",
        function(error, results) {
            if (error) throw error;
            res.json(results);
        }
    );
});

app.get('/status', (req, res) => res.send('Working!'));