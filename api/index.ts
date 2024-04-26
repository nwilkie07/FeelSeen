const fs = require('fs');
const pg = require('pg');
const url = require('url');
import {cert, dbHost, dbName, dbPassword, dbPort, dbUser} from "./cert"

const config = {
    user: dbUser,
    password: dbPassword,
    host: dbHost,
    port: dbPort,
    database: dbName,
    ssl: {
        rejectUnauthorized: true,
        ca: cert,
    },
};

const client = new pg.Client(config);
client.connect(function (err) {
    if (err)
        throw err;
    client.query("SELECT VERSION()", [], function (err, result) {
        if (err)
            throw err;

        console.log(result.rows[0].version);
        client.end(function (err) {
            if (err)
                throw err;
        });
    });
});

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Define your API routes here

app.listen(PORT, () => {

    console.log(`Server is running on port ${PORT}`);

});

app.get('/api/data', (req, res) => {
    const data = {
        message: 'Hello from the API!'
};
    res.json(data);
});