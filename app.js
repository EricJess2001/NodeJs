require ("dotenv").config()
const express = require ("express") //declara un paquete
const cors = require ("cors")  //utiliza cors
const dbConnect = require('./config/mongo') //requerir el modulo exports
const app = express () //

app.use(cors()) //linea 2 U

//R


//TODO localhost/api/-------------
app.use("/api",require("./routers/tracks"))

const port = process.env.PORT || 3000 // declaracion al puerto al env con p

app.listen(port, ()=> {    //escucha y devuelve
    console.log(`http://localhost:${port}`)
})


dbConnect()