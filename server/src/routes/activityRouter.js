const { Router } = require("express");
const { getActivityHandler, activityHandler } = require("../handlers/activitiesHandler");


const activityRouter = Router()

activityRouter.get("/", getActivityHandler)

activityRouter.post("/post", activityHandler)


module.exports = activityRouter