const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

require('dotenv').config();

mongoose.connect(process.env.ATLAS_URI)
.catch((err) => {
    console.log("There was an error connecting to the database:");
    console.log(err);
});

const db = mongoose.connection;

db.once('connected', () => {
    console.log('Database connected successfully.');
});

db.on('error', (err) => {
    console.log(err);
})

const app = express();

app.use(express.json());

// api routes
app.use('/api', routes);

app.get('/', (req, res) => {
    res.send({
        routes: [
            'POST: api/cards',
            'GET: api/cards',
            'GET: api/cards/:id',
            'PATCH: api/cards/:id',
            'PUT: api/cards/:id',
            'DELETE: api/cards/:id'
        ],
    });
})

app.get('/healthcheck', (req, res) => {
    res.status(200).send({
        status: 200,
        message: "OK",
    });
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`app is running on port ${process.env.PORT}.`)
})