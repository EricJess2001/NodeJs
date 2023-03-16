const express = require ("express");
const routes = express.Router();  // manejador de r



// TODO http://localhost/tracks GET, POST, DELETE, PUT


routes.get("/", (req, res) => {
    
    const data = ["hola","mundo"]
    
    res.send({data})
})




module.exports = routes