const { createActivityInDb, getActivityDb } = require("../controllers/activitiesController");

const getActivityHandler = async (req,res) => {
    try {
        const response = await getActivityDb()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const activityHandler = async (req, res) => {
    const { name, difficulty, duration, season, countryId } = req.body;
    try {
        const response = await createActivityInDb(name, difficulty, duration, season, countryId)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ error: error.message })
        console.log(error)
    }
}


module.exports = {
    getActivityHandler,
    activityHandler
}