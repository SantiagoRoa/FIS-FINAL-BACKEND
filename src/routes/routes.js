const express = require('express');
const router = express.Router();

const CuentaController = require('../controllers/CuentaController');
const PeliculaController = require('../controllers/PeliculaController');
const EvaluacionController = require('../controllers/EvaluacionController');
const BoletaController = require('../controllers/BoletaController')
const CarteleraController = require('../controllers/CarteleraController')
const CategoriaSillaController = require('../controllers/CategoriaSillaController')
const CineController = require('../controllers/CineController')
const ClienteController = require('../controllers/ClienteController')
const CompraController = require('../controllers/CompraController')
const ConsumibleController = require('../controllers/ConsumibleController')
const EmpleadoController = require('../controllers/EmpleadoController')
const MultiplexController = require('../controllers/MultiplexController')
const MultiplexClienteController = require('../controllers/MultiplexClienteController')
const PedidoController = require('../controllers/PedidoController')
const ReporteController = require('../controllers/ReporteController')
const SalaController = require('../controllers/SalaController')
const SillaController = require('../controllers/SillaController')

router.get('/cuentas/list', CuentaController.list);
router.get('/cuentas/select/:id/:password', CuentaController.select);
router.post('/cuentas/insert', CuentaController.create);

router.get('/evaluaciones/list', EvaluacionController.list);
router.post('/evaluaciones/insert', EvaluacionController.create);

router.get('/boletas/list', BoletaController.list);
router.get('/boletas/select/:id', BoletaController.select);
router.post('/boletas/insert', BoletaController.create);

router.get('/cartelera/list', CarteleraController.list);
router.get('/cartelera/select/:idMultiplex', CarteleraController.selectByMultiplex);
router.get('/cartelera/select/:idPelicula', CarteleraController.selectByPelicula);
router.post('/cartelera/insert', CarteleraController.create);

router.get('/categoriaSilla/list', CategoriaSillaController.list);
router.get('/categoriaSilla/select/:idCategoriaSilla', CategoriaSillaController.select);
router.post('/categoriaSilla/insert', CategoriaSillaController.create);

router.get('/cine/list', CineController.list);
router.get('/cine/select/:idCineJungla', CineController.select);
router.post('/cine/insert', CineController.create);

router.get('/clientes/list', ClienteController.list);
router.get('/clientes/select/:idCliente', ClienteController.select);
router.post('/clientes/insert', ClienteController.create);

router.get('/compras/list', CompraController.list);
router.get('/compras/select/:idCompra', CompraController.select);
router.post('/compras/insert', CompraController.create);

router.get('/consumibles/list', ConsumibleController.list);
router.get('/consumibles/select/:idConsumible', ConsumibleController.select);
router.post('/consumibles/insert', ConsumibleController.create);

router.get('/empleados/list', EmpleadoController.list);
router.get('/empleados/select/:idEmpleado', EmpleadoController.select);
router.get('/empleados/select/:idEmpleadoMultiplex', EmpleadoController.selectByMultiplex);
router.post('/empleados/insert', EmpleadoController.create);

router.get('/multiplex/list', MultiplexController.list);
router.get('/multiplex/select/:idMultiplex', MultiplexController.select);
router.post('/multiplex/insert', MultiplexController.create);

router.get('/multiplexCliente/list', MultiplexClienteController.list);
router.get('/multiplexCliente/select/:idMultiplexClienteCalificacion', MultiplexClienteController.selectByCalificacion);
router.get('/multiplexCliente/select/:idCliente', MultiplexClienteController.selectByCliente);
router.get('/multiplexCliente/select/:idMultiplex', MultiplexClienteController.selectByMultiplex);
router.post('/multiplexCliente/insert', MultiplexClienteController.create);

router.get('/pedidos/list', PedidoController.list);
router.get('/pedidos/select/:idPedido', PedidoController.select);
router.post('/pedidos/insert', PedidoController.create);

router.get('/peliculas/list', PeliculaController.list);
router.get('/peliculas/select/:idPelicula', PeliculaController.select);
router.post('/peliculas/insert', PeliculaController.create);

router.get('/reportes/list', ReporteController.list);
router.get('/reportes/select/:idReporte', ReporteController.select);
router.get('/reportes/select/:idReporteMultiplex', ReporteController.selectByMultiplex);
router.post('/reportes/insert', ReporteController.create);

router.get('/salas/list', SalaController.list);
router.get('/salas/select/:idSala', SalaController.select);
router.get('/salas/select/:idSalaMultiplex', SalaController.selectByMultiplex);
router.post('/salas/insert', SalaController.create);

router.get('/sillas/list', SillaController.list);
router.get('/sillas/select/:idLetra/:idNumero', SillaController.select);
router.get('/sillas/select/:idSala', SillaController.selectBySala);
router.post('/sillas/insert', SillaController.create);

module.exports = router;