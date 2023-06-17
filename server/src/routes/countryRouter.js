const { Router } = require("express")
const { getCountryHandler, getIdHandler, getCountryName } = require("../handlers/countriesHandler")


const countriesRouter = Router()


countriesRouter.get("/", getCountryHandler)
countriesRouter.get("/name", getCountryName)
countriesRouter.get("/:id", getIdHandler)

module.exports = countriesRouter;