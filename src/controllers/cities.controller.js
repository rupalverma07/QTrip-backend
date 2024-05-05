const { fetchCities } = require("../services/city.service")

const getCities = async(req,res) =>{
    const result= await fetchCities()

    res.status(200).json(result)
}

module.exports = {getCities}