const express = require('express');

const routes = express.Router();

const ProductionController = require('./controllers/ProductController'); 

// Primeira rota
routes.get("/products", ProductionController.index);     
routes.get("/products/:id", ProductionController.show);
routes.post("/products", ProductionController.store);
routes.put("/products/:id", ProductionController.update);
routes.delete("/products/:id", ProductionController.destroy);

 module.exports = routes;
 
 
 
