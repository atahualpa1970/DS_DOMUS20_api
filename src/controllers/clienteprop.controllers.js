const clientepropCtrl = {}

const Clienteprop = require('../models/clientesprop')

clientepropCtrl.getClientesprop = async (req, res) => {
    const clientesprop = await Clienteprop.find()
    res.json(clientesprop)
}

clientepropCtrl.createClienteprop = async (req, res) => {
    const newClienteprop = new Clienteprop(req.body)
    await newClienteprop.save()
    res.send({status: 'Clienteprop creado'})
}

clientepropCtrl.getClienteprop = async (req, res) => {
    const clienteprop = await Clienteprop.findById(req.params.id)
    res.send(clienteprop)
}

clientepropCtrl.updateClienteprop = async (req, res) => {
    await Clienteprop.findByIdAndUpdate(req.params.id, req.body)
    res.send({status: "Clienteprop modificado"})
}

clientepropCtrl.deleteClienteprop = async (req, res) => {
    await Clienteprop.findByIdAndDelete(req.params.id)
    res.send({status: "Clienteprop eliminado"})
}

module.exports = clientepropCtrl