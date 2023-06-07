const { Router } = require("express")
const { getCountryHandler, getIdHandler } = require("../handlers/countriesHandler")


const countriesRouter = Router()


countriesRouter.get("/", getCountryHandler)

countriesRouter.get("/:id", getIdHandler)

module.exports = countriesRouter;