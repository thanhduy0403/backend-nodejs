const express = require('express');
const router = express.Router();

const { validateSchema } = require('../../utils');

const {
    getdiscount, getalldiscount,

} = require('./controller');

router.get('/1', getdiscount);
router.get('/2',getalldiscount)


module.exports = router;