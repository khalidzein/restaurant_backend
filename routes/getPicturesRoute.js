const router = require("express").Router();
const getPicturesRoute = require("../controllers/getPicturesController");

router.route("/").get(getPicturesRoute.pictures);

module.exports = router;
