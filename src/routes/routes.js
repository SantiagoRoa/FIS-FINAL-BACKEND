const express = require('express');
const router = express.Router();

const CuentaController = require('../controllers/CuentaController');
const PeliculaController = require('../controllers/PeliculaController');

/*
const ReporteController = require('../controllers/ReporteController');
const SillaController = require('../controllers/SillaController');
const Categoria_SillaController = require('../controllers/Categoria_SillaController');
const Cine_JunglaController = require('../controllers/Cine_JunglaController');
const MultiplexController = require('../controllers/MultiplexController');
const SalaController = require('../controllers/SalaController');
const CarteleraController = require('../controllers/CarteleraController');
const PeliculaController = require('../controllers/PeliculaController');
const EmpleadoController = require('../controllers/EmpleadoController');
const Multiplex_ClienteController = require('../controllers/Multiplex_ClienteController');
const EvaluacionController = require('../controllers/EvaluacionController');
const BoletaController = require('../controllers/BoletaController');
const CuentaController = require('../controllers/CuentaController');
const ClienteController = require('../controllers/ClienteController');
const CompraController = require('../controllers/CompraController');
const ConsumibleController = require('../controllers/ConsumibleController');
*/
/*
router.get('/reporte', ReporteController.list);
router.get('/silla', SillaController.list);
router.get('/categoria-silla', Categoria_SillaController.list);
router.get('/cine-jungla', Cine_JunglaController.list);
router.get('/multiplex', MultiplexController.list);
router.get('/sala', SalaController.list);
router.get('/cartelera', CarteleraController.list);
router.get('/pelicula', PeliculaController.list);
router.get('/empleado', EmpleadoController.list);
router.get('/multiplex-cliente', Multiplex_ClienteController.list);
router.get('/evaluacion', EvaluacionController.list);
router.get('/boleta', BoletaController.list);
router.get('/cuenta', CuentaController.list);
router.get('/cliente', ClienteController.list);
router.get('/compra', CompraController.list);
router.get('/consumible', ConsumibleController.list);
*/

/*
router.post('/insert-reporte', ReporteController.create);
router.post('/insert-silla', SillaController.create);
router.post('/insert-categoria-silla'', Categoria_SillaController.create);
router.post('/insert-cine-jungla', Cine_JunglaController.create);
router.post('/insert-multiplex', MultiplexController.create);
router.post('/insert-sala', SalaController.create);
router.post('/insert-cartelera', CarteleraController.create);
router.post('/insert-pelicula', PeliculaController.create);
router.post('/insert-empleado', EmpleadoController.create);
router.post('/insert-multiplex-cliente', Multiplex_ClienteController.create);
router.post('/insert-evaluacion', EvaluacionController.create);
router.post('/insert-boleta', BoletaController.create);
router.post('/insert-cuenta', CuentaController.create);
router.post('/insert-cliente', ClienteController.create);
router.post('/insert-compra', CompraController.create);
router.post('/insert-consumible', ConsumibleController.create);
*/


router.get('/cuentas/list', CuentaController.list);
router.get('/cuentas/select/:id/:password', CuentaController.select);
router.post('/cuentas/insert', CuentaController.create);


router.post('/peliculas/insert', PeliculaController.create);

//router.get('/cliente', ClienteController.list);
//router.post('/insert-cliente', ClienteController.create);




//router.get('/pelicula', PeliculaController.list);
//router.post('/insert-pelicula', PeliculaController.create);


//router.get('/evaluacion', EvaluacionController.list);
//router.post('/insert-evaluacion', EvaluacionController.create);


module.exports = router;