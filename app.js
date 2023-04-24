const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

require('dotenv').config();

mongoose.connect(process.env.ATLAS_URI);
const db = mongoose.connection;

db.once('connected', () => {
    console.log('Database connected successfully.');
});

db.on('error', (err) => {
    console.log(err);
})

const app = express();

app.use(express.json());
app.use('/api', routes);

app.get('/', (req, res) => {
    res.send('Api root');
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`app is running on port ${process.env.PORT}.`)
})