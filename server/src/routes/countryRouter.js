const { Router } = require("express")


const countriesRouter = Router()


countriesRouter.get("/", (req, res) => {
    res.status(200).send("ruta de los paises")
})

countriesRouter.get("/:id", (req, res) => {
    res.status(200).send("ruta del detail de los paises")
})

module.exports = countriesRouter;