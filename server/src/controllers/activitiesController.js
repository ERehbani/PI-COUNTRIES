const {Activity} = require("../db"); // Asegúrate de importar Activity correctamente según la ubicación de tu archivo


const createActivityInDb = async (name, difficulty, duration, season, countryId) => {
    const activity = await Activity.create({ name, difficulty, duration, season, countryId });
    // await activity.setCountry(countryId);
    return activity;
};

const getActivityDb = async () => {
    const activities = await Activity.findAll()
    return activities
}




module.exports = {
    createActivityInDb,
    getActivityDb
}