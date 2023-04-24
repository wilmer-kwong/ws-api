const model = require("../model");

const deleteCard = async (req, res) => {
    const id = req.params.id;

    await model.findByIdAndDelete(id).then((data) => {
        res.send(`${data.id}:"${data.name}" has been deleted.`);
    }).catch((err) => {
        res.status(400).json(err);
    })
}

module.exports = deleteCard;