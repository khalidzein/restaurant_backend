require("dotenv").config();
const express = require("express");
const app = new express();
const cors = require("cors");
const PORT = process.env.PORT || 8080;
const corsOptions = require("./config/corsOptions");

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static("public"));

const getCocktailsRoute = require("./routes/getCocktailsRoute");
const getAwardsPicRoute = require("./routes/getAwardsPicRoute");
const getPicturesRoute = require("./routes/getPicturesRoute");
const getWinesRoute = require("./routes/getWinesRoute");

app.use("/cocktails", getCocktailsRoute);
app.use("/wines", getWinesRoute);
app.use("/pictures", getPicturesRoute);
app.use("/awards", getAwardsPicRoute);

app.listen(PORT, (error) =>
    error ? console.error(error) : console.info(`listening on ${PORT}`)
);
