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
app.use(cors());
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

app.listen(app.get('port'), () => {
    console.log('Servidor corriendo en puerto', app.get('port'))
});
