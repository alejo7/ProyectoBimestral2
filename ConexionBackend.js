var express = require('express'),
 mongoose=require('mongoose'),
 app = express();


 mongoose.connect('mongodb://localhost/Base_Twitt',function(err, res){
 	if(err) console.log('INCORRECTO CONEXION CON LA BASE DE DATOS..!!! ' + err);
 	else console.log('LA CONEXION CON LA BASE DE DATOS HA SIDO REALIZADA SATISFACTORIAMENTE');
 });
 

app.get('/',function(req,res) {
res.send('SERVIDOR EN FUNCIONAMIENTO');
});
require('./rutas')(app);

app.listen(7000);
console.log('SERVIDOR CONECTADO CON EL PUERTO 7000');
