const express = require('express');
const router = express.Router();

const CuentaController = require('../controllers/CuentaController');
const PeliculaController = require('../controllers/PeliculaController');
const EvaluacionController = require('../controllers/EvaluacionController');
const BoletaController = require('../controllers/BoletaController')
const CarteleraController = require('../controllers/CarteleraController')
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

router.get('/cuentas/list', CuentaController.list);
router.get('/cuentas/select/:id/:password/:type', CuentaController.select);
router.post('/cuentas/insert', CuentaController.create);

router.get('/evaluaciones/list', EvaluacionController.list);
router.get('/evaluaciones/select/:id', EvaluacionController.list);
router.post('/evaluaciones/insert', EvaluacionController.create);

router.get('/boletas/list', BoletaController.list);
router.get('/boletas/select/:id', BoletaController.select);
router.post('/boletas/insert', BoletaController.create);

router.get('/cine/list', CineController.list);
router.get('/cine/select/:id', CineController.select);
router.post('/cine/insert', CineController.create);

router.get('/clientes/list', ClienteController.list);
router.get('/clientes/select/:id', ClienteController.select);
router.post('/clientes/insert', ClienteController.create);

router.get('/compras/list', CompraController.list);
router.get('/compras/select/:id', CompraController.select);
router.get('/compras/select-cliente/:id', CompraController.selectByCliente);
router.post('/compras/insert', CompraController.create);

router.get('/consumibles/list', ConsumibleController.list);
router.get('/consumibles/select/:id', ConsumibleController.select);
router.post('/consumibles/insert', ConsumibleController.create);

router.get('/empleados/list', EmpleadoController.list);
router.get('/empleados/select/:id', EmpleadoController.select);
router.post('/empleados/insert', EmpleadoController.create);

router.get('/multiplex/list', MultiplexController.list);
router.get('/multiplex/select/:id', MultiplexController.select);
router.post('/multiplex/insert', MultiplexController.create);

router.get('/pedidos/list', PedidoController.list);
router.get('/pedidos/select/:idPedido', PedidoController.select);
router.post('/pedidos/insert', PedidoController.create);

router.get('/peliculas/list', PeliculaController.list);
router.get('/peliculas/select/:id', PeliculaController.select);
router.get('/peliculas/select-multiplex/:id', PeliculaController.selectByMultiplex);
router.post('/peliculas/insert', PeliculaController.create);

router.get('/reportes/list', ReporteController.list);
router.get('/reportes/select/:id', ReporteController.select);
router.post('/reportes/insert', ReporteController.create);

router.get('/salas/list', SalaController.list);
router.get('/salas/select/:id', SalaController.select);
router.post('/salas/insert', SalaController.create);
router.post('/salas/update-general', SalaController.substractSillaGeneral);
router.post('/salas/update-preferencial', SalaController.substractSillaPreferencial);

router.get('/multiplex-cliente/list', MultiplexClienteController.list);
router.get('/cartelera/list', CarteleraController.list);

module.exports = router;