const { getApiInfo, getCountriesByName, getCountriesById, getCountryDb } = require("../controllers/countryController");

const getCountryHandler = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const response = await getCountriesByName(name);
      return res.status(200).json(response);
    }
    const response = await getCountryDb();
    return res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCountryName = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const response = await getCountriesByName(name);
      return res.status(200).json(response);
    }
    const response = await getCountryDb();
    return res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      const response = await getCountriesById(id);
      return res.status(200).json(response);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getCountryHandler,
  getIdHandler,
  getCountryName,
};
