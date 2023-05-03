const model = require('../model');

const postCard = async (req, res) => {
    const card = new model({
        name: req.body.name,
        code: req.body.code,
        text: req.body.text,
        rarity: req.body.rarity,
        color: req.body.color,
        type: req.body.type,
        level: req.body.level,
        cost: req.body.cost,
        power: req.body.power,
        soul: req.body.soul,
        traits: req.body.traits,
    });

    await card.save()
    .then((data) => {
        res.location('/cards/' + data._id);
        res.status(201).json(data);
    })
    .catch((err) => {
        res.status(400).json(err);
    })
};

module.exports = postCard;