const contactCtrl = {}

const Contact = require('../models/contacts')

contactCtrl.getContacts = async (req, res) => {
    const contacts = await Contact.find()
    res.json(contacts)
}

contactCtrl.createContact = async (req, res) => {
    const newContact = new Contact(req.body)
    await newContact.save()
    res.send({status: 'Contacto creado'})
}

contactCtrl.getContact = async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    res.send(contact)
}

contactCtrl.updateContact = async (req, res) => {
    await Contact.findByIdAndUpdate(req.params.id, req.body)
    res.send({status: "Contacto modificado"})
}

contactCtrl.deleteContact = async (req, res) => {
    await Contact.findByIdAndDelete(req.params.id)
    res.send({status: "Contacto eliminado"})
}

module.exports = contactCtrl