const express = require('express');
const router = express.Router();
const { getAllCards, getOneCard } = require('./get');

// GET
// /cards
router.get('/cards', getAllCards)

// GET
// /cards/<id>
router.get('/cards/:id', getOneCard);

// POST
// /post
router.post('/cards', require('./post'));

// PUT
router.patch('/cards/:id', require('./patch'));

//Delete by ID Method
router.delete('/cards/:id', require('./delete'));

module.exports = router;