const express = require('express')
const router = express.Router();
const ProductoController = require('../controllers/productoController');

router.post('/crear-producto', ProductoController.crearProducto);
router.get('/obtener-lista-Productos', ProductoController.obtenerProductos);
router.get('/obtener-producto/:id', ProductoController.obtenerproducto);
router.put('/actualizar-producto/:id', ProductoController.actualizarProducto);
router.delete('/borrar-producto/:id', ProductoController.borrarProducto);



module.exports = router;