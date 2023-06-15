const {Activity, Country} = require("../db"); // Asegúrate de importar Activity correctamente según la ubicación de tu archivo


const createActivityInDb = async (name, difficulty, duration, season, countryId) => {
    const activity = await Activity.create({ name, difficulty, duration, season, countryId });
    // await activity.setCountry(countryId);
    console.log(activity)
    const country = await Country.findAll({
        where: {
            id: countryId
        }
    })
    activity.addCountries(country)

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