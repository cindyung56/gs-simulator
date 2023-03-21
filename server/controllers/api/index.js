const router = require('express').Router();
// const card = require('./card');
const banner = require('./banner');

// router.use('/card', card);
router.use('/banner', banner);

module.exports = router;