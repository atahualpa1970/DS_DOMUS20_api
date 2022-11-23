const { Router } = require('express')
const router = Router()

const reclamoCtrl = require('../controllers/reclamo.controllers.js')

// ruta /api/reclamos/
router.get('/', reclamoCtrl.getReclamos)
router.get('/all', reclamoCtrl.getReclamosCliProp)
router.post('/', reclamoCtrl.createReclamo)

// ruta /api/reclamos/:id
router.get('/:id', reclamoCtrl.getReclamo)
router.put('/:id', reclamoCtrl.updateReclamo)
router.put('/idClaim/:id', reclamoCtrl.updateReclamoByIdClaim)
router.delete('/:id', reclamoCtrl.deleteReclamo)

module.exports = router