const { Router } = require("express");
const countriesRouter = require("./countryRouter");
const activityRouter = require("./activityRouter");

const router = Router();


router.use("/countries", countriesRouter)
router.use("/activities", activityRouter)

module.exports = router;
