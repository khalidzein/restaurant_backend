const router = require("express").Router();
const getWinesRoute = require("../controllers/getWinesController");

router.route("/").get(getWinesRoute.wines);

module.exports = router;
