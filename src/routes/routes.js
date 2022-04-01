const express = require('express');
const router = express.Router();

const CuentaController = require('../controllers/CuentaController');
const PeliculaController = require('../controllers/PeliculaController');
const EvaluacionController = require('../controllers/EvaluacionController');

router.get('/cuentas/list', CuentaController.list);
router.get('/cuentas/select/:id/:password', CuentaController.select);
router.post('/cuentas/insert', CuentaController.create);

router.get('/peliculas/list', PeliculaController.list);
router.post('/peliculas/insert', PeliculaController.create);


router.get('/evlaciones/list', EvaluacionController.list);
router.post('/evlaciones/insert', EvaluacionController.create);

module.exports = router;