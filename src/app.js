require('dotenv').config();

const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql2');
const myConnection = require('express-myconnection');
var cors = require('cors');
const { urlencoded } = require('express');

const app = express();
const router = require('./routes/routes');

app.set('port', process.env.PORT);

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(myConnection(mysql, { //Conexión
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    port: process.env.DBPORT,
    database: process.env.DBDATABASE
}, 'single'))
app.use(express.urlencoded({
    extended: false
}));


app.use('/', router);
app.use('/cuentas', router);
//app.use('/cuenta-select/:id', router);

/*
app.use('/index', router);
app.use('/cine-jungla', router);
app.use('/reporte', router);
app.use('/multiplex', router);
app.use('/silla', router);
app.use('/sala', router);
app.use('/categoria-silla', router);
app.use('/pelicula', router);
app.use('/boleta', router);
app.use('/evaluacion', router);
app.use('/compra', router);
app.use('/cliente', router);
app.use('/consumible', router);
app.use('/cuenta', router);
app.use('/empleado', router);
app.use('/multiplex-cliente', router);
app.use('/cartelera', router);
*/

app.listen(app.get('port'), () => {
    console.log('Servidor corriendo en puerto', app.get('port'))
});
