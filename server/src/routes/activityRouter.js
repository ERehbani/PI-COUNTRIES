const { Router } = require("express");


const activityRouter = Router()

activityRouter.get("/", (req, res) => {
    res.status(200).send("ruta de las actividades")
})

activityRouter.post("/post", (req, res) => {
    res.status(200).send("ruta para crear actividad")
})


module.exports = activityRouter