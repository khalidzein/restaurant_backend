const router = require("express").Router();
const getCocktailsRoute = require("../controllers/getCocktailsController");

router.route("/").get(getCocktailsRoute.cocktails);

module.exports = router;
