const express = require("express");
const { add, getAll, singleOne, deleteOne, update } = require("../Controller/Category-Controller");

const CategoryRoute = express.Router();

CategoryRoute.get("/category",getAll);
CategoryRoute.get("/category/:id",singleOne);
CategoryRoute.post("/category",add);
CategoryRoute.delete("/category/:id",deleteOne);
CategoryRoute.put("/category/:id",update);

module.exports = CategoryRoute;