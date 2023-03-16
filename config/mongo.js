const mongoose = require("mongoose");  //declaracion de paq

const dbConnect = () => {                  //funcion f
         
 const DB_URI = process.env.DB_URI;
  mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,               //funcion callback

  },(err, res) => {
       if(!err){
        console.log('*** CONEXION CORRECTA ***')
       }else{
        console.log('*** ERROR DE CONEXION ***')
       }
  }
  
  
  );

}

module.exports = dbConnect                 // esto se va a poder export


