const Model = require('../model');

const getAllCards = async (req, res) => {
    await Model.find()
    .then((data) => {
        res.json(data);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

const getOneCard = async (req, res) => {
    await Model.findById(req.params.id).then((data) => {
        res.json(data);
    }).catch((err) => {
        res.status(500).json(err);
    })
}

module.exports = {
    getAllCards,
    getOneCard
};