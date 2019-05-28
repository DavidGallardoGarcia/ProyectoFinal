'use strict';
//cargamos la libreria mongoose de node_modules
var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3999;//si hay una variable de entorno configurada en el servidor la utilizara y en caso contrario utilizara 3999

mongoose.set('useFindAndModify', false);//Para que no muestre en consola error deprecated
mongoose.Promise = global.Promise;//Permite trabajar con promesas
//Conexion
mongoose.connect(process.env.conexion_env, {useNewUrlParser: true})
        .then(() => {
            console.log('La conexión a la BD de mongo se ha realizado correctamente');

            //Crear el servidor
            app.listen(port, () => {
            	console.log('El servidor http://localhost:3999 esta funcionando');
            });
        })
        .catch(error => console.log(error));