const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/lodgingCtrl');

router.post('/', ctrl.addLodging)
router.get('/', ctrl.getAllLodging);

module.exports = router;