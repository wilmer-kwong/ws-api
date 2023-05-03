const express = require('express');
const router = express.Router();
const { getAllCards, getOneCard } = require('./get');

// GET
// /cards
router.get('/cards', getAllCards)

// GET
router.get('/cards/:id', getOneCard);

// POST
router.post('/cards', require('./post'));

// PUT
router.put('/cards/:id', require('./put'));

// PATCH
router.patch('/cards/:id', require('./patch'));

// DELETE
router.delete('/cards/:id', require('./delete'));

module.exports = router;