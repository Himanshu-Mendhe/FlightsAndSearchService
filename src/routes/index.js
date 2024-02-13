const express = require ('express');
const router = express.Router();

const v1ApiRouets = require ('./v1/index');

router.use('/v1', v1ApiRouets);

module.exports = router;