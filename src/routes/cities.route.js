const express = require('express');
const { getCities } = require('../controllers/cities.controller');

const router = express.Router();

router.get("/",getCities)

module.exports = router;