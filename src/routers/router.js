const router = require('express').Router();
const create_preference = require('../controllers/create_preference');
const failure = require('../controllers/failure');
const pending = require('../controllers/pending');
const success = require('../controllers/success');

router.post('/create_preference', create_preference);
router.get('/failure', failure);
router.get('/pending', pending);
router.get('/success', success);

module.exports = router;
