const PropCtrl = {}

const Prop = require('../models/props')

PropCtrl.getProps = async (req, res) => {
    const Props = await Prop.find()
    res.json(Props)
}

PropCtrl.createProp = async (req, res) => {
    const newProp = new Prop(req.body)
    await newProp.save()
    res.send({status: 'Propiedad creada'})
}

PropCtrl.getProp = async (req, res) => {
  console.log("ID: ", req.params.id)
    const prop = await Prop.find({id: req.params.id}) // usar findById para _id mongo
    res.send(prop)
}

PropCtrl.updateProp = async (req, res) => {
    await Prop.findByIdAndUpdate(req.params.id, req.body)
    res.send({status: "Propiedad modificada"})
}

PropCtrl.deleteProp = async (req, res) => {
    await Prop.findByIdAndDelete(req.params.id)
    res.send({status: "Propiedad eliminada"})
}

module.exports = PropCtrl