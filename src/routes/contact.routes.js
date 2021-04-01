const { Router } = require('express')
const router = Router()

const contactCtrl = require('../controllers/contact.controllers.js')

// ruta /api/contacts/
router.get('/', contactCtrl.getContacts)
router.post('/', contactCtrl.createContact)

// ruta /api/contacts/:id
router.get('/:id', contactCtrl.getContact)
router.put('/:id', contactCtrl.updateContact)
router.delete('/:id', contactCtrl.deleteContact)

module.exports = router