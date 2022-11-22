const { Router } = require('express')
const router = Router()

const clienteCtrl = require('../controllers/cliente.controllers.js')

// ruta /api/clientes/
router.get('/', clienteCtrl.getClientes)
router.post('/', clienteCtrl.createCliente)

// ruta /api/clientes/:id
router.get('/:id', clienteCtrl.getCliente)
router.get('/withProps/:codCli', clienteCtrl.getClienteProps)
router.get('/search/:data', clienteCtrl.searchClienteName)
router.put('/:id', clienteCtrl.updateCliente)
router.delete('/:id', clienteCtrl.deleteCliente)

module.exports = router