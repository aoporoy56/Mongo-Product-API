const express = require('express');
const { getAll, getSingle, add, deleteSingle, update} = require('../Controller/Product-Controller');
const Router = express.Router();

Router.get("/product",getAll);
Router.get("/product/:id",getSingle);
Router.post("/product",add);
Router.put("/product/:id",update);
Router.delete("/product/:id",deleteSingle);


module.exports = Router