const model = require("../model");

const updateCard = async (req, res) => {
    const id = req.params.id;
    newData = req.body;
    const options = { new: true };

    await model.findByIdAndUpdate(id, newData, options)
    .then((data) => {
        res.send(data);
    }).catch((err) => {
        res.status(400).json(err)
    });
}

module.exports = updateCard;