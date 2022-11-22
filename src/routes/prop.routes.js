const { Router } = require('express')
const router = Router()

const propCtrl = require('../controllers/prop.controllers.js')

// ruta /api/propiedades/
router.get('/', propCtrl.getProps)
router.post('/', propCtrl.createProp)

// ruta /api/propiedades/:id
router.get('/:id', propCtrl.getProp)
router.put('/:id', propCtrl.updateProp)
router.delete('/:id', propCtrl.deleteProp)

module.exports = router