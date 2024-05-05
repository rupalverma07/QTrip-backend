const express = require("express");
const cityRoute = require("./cities.route");

const router = express.Router();

router.use("/cities",cityRoute)
module.exports = router;