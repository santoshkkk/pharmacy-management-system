const express = require('express');
const db = require('./database');

const app = express();

app.get('/', (req, res) => {
    res.send('Backend Server Running');
});

app.get('/data', (req, res) => {
    db.query('SELECT NOW() AS time', (err, result) => {
        if (err) return res.status(500).send(err);

        res.json(result);
    });
});

app.listen(7000, () => {
    console.log('Server started at port 7000');
});
