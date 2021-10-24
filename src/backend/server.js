require('dotenv').config()

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database');

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/test_connection', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

// Gets list of all donors
app.get('/donors', (req, res) => {
    connection.query(
        "SELECT * FROM Donor",
        function(error, results) {
            if (error) throw error;
            res.json(results);
        }
    );
});

// Gets list of all recipients
app.get('/recipients', (req, res) => {
   connection.query(
       "SELECT * FROM Recipient",
       function(error, results) {
           if (error) throw error;
           res.json(results);
       }
   )
});


// Gets list of all requests associated to recipient id
// path: /get_requests?id=...
app.get('/requests', (req, res) => {
    connection.query(
        "SELECT * FROM Request WHERE id = ?", req.query.id,
        function(error, results) {
            if (error) throw error;
            res.json(results);
        }
    )
});

// Gets list of all listings associated to donor id
// path: /get_listings?id=...
app.get('/listings', (req, res) => {
    connection.query(
        "SELECT * FROM Listing WHERE donor_id = ?", req.query.id,
        function(error, results) {
            if (error) throw error;
            res.json(results);
        }
    )
});

// Gets information about single donor specified by donor id
app.get('/donor', (req, res) => {
    connection.query(
        "SELECT * FROM Donor WHERE id = ?", req.query.id,
        function(error, results) {
            if (error) throw error;
            res.json(results);
        }
    );
});

// Gets information about single recipient specified by id
app.get('/recipient', (req, res) => {
    connection.query(
        "SELECT * FROM Recipient WHERE id = ?", req.query.id,
        function(error, results) {
            if (error) throw error;
            res.json(results);
        }
    );
});

// Submits new request
app.post('/request', (req, res) => {
    connection.query(
        "INSERT INTO Request (device_type, quantity, fulfilled, recipient_id) values (?, ?, false, ?)",
            req.body.device_type, req.body.quantity, req.body.id,
        function(error, results) {
            if (error) throw error;
            res.json(results);
        }
    );
});

// Submits new listing
app.post('/listing', (req, res) => {
    let JSONBody = req.body;
    console.log(JSONBody);

    connection.query(
        "INSERT INTO Listing (brand, device_type, model, quantity, donor_id) values (?, ?, ?, ?, ?)",
        [JSONBody.brand, JSONBody.device_type, JSONBody.model, JSONBody.quantity, JSONBody.id],
        function(error, results) {
            if (error) throw error;
            res.json(results);
        }
    );
});