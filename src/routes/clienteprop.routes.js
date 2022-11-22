const { Router } = require('express')
const router = Router()

const clientepropCtrl = require('../controllers/clienteprop.controllers.js')

// ruta /api/clientesprop/
router.get('/', clientepropCtrl.getClientesprop)
router.post('/', clientepropCtrl.createClienteprop)

// ruta /api/clientesprop/:id
router.get('/:id', clientepropCtrl.getClienteprop)
router.put('/:id', clientepropCtrl.updateClienteprop)
router.delete('/:id', clientepropCtrl.deleteClienteprop)

module.exports = router