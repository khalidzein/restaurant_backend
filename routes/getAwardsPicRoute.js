const router = require("express").Router();
const getAwardsPicRoute = require("../controllers/getAwardsPicController");

router.route("/").get(getAwardsPicRoute.awardsPic);

module.exports = router;
