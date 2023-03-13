const Lodging = require('../models/lodgingModels');

exports.getAllLodging = (req, res, next) => {
    Lodging.find()
        .then(lodging => res.status(200).json(lodging))
        .catch(error => res.status(400).json({ message: error }));
};
