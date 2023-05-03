const model = require("../model");

const updateCard = async (req, res) => {
    const id = req.params.id;
    newData = req.body;

    await model.findOneAndReplace(id, newData)
    .then((data) => {
        res.status(201).send(data);
    }).catch((err) => {
        res.status(400).json(err)
    });
}

module.exports = updateCard;