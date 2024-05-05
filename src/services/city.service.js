const { City } = require("../models/city.model")

const fetchCities = async() =>{
    const data = await City.find()
    return data
}

module.exports= {fetchCities}