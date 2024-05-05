const mongoose = require('mongoose');

const citySchema = mongoose.Schema();

const City = mongoose.model("cities",citySchema);

module.exports = {City}