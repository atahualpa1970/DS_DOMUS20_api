const reclamoCtrl = {}

const Reclamo = require('../models/reclamos')

reclamoCtrl.getReclamos = async (req, res) => {
  const reclamos = await Reclamo.find()
  res.json(reclamos)
}

reclamoCtrl.createReclamo = async (req, res) => {
  const newReclamo = new Reclamo(req.body)
  await newReclamo.save()
  res.send({ status: 'Reclamo creado' })
}

reclamoCtrl.getReclamo = async (req, res) => {
  const reclamo = await Reclamo.findById(req.params.id)
  res.send(reclamo)
}

reclamoCtrl.updateReclamo = async (req, res) => {
  await Reclamo.findByIdAndUpdate(req.params.id, req.body)
  res.send({ status: "Reclamo modificado" })
}

reclamoCtrl.updateReclamoByIdClaim = async (req, res) => {
  await Reclamo.findOneAndUpdate({id: req.params.id}, req.body)
  res.send({ status: "Reclamo modificado" })
}

reclamoCtrl.deleteReclamo = async (req, res) => {
  await Reclamo.findByIdAndDelete(req.params.id)
  res.send({ status: "Reclamo eliminado" })
}

reclamoCtrl.getReclamosCliProp = async (req, res) => {
  const reclamos = await Reclamo.aggregate(
    [{
      $lookup: {
        from: 'clientes',
        localField: 'clienteQueReclama.id',
        foreignField: 'id',
        as: 'clienteQueReclama'
      }
    },
    {
      $unwind: '$clienteQueReclama'
    },
    {
      $lookup: {
        from: 'props',
        localField: 'propiedad.id',
        foreignField: 'id',
        as: 'propiedad'
      }
    },
    {
      $unwind: '$propiedad'
    }
    ]
  );
  res.json(reclamos)
}

module.exports = reclamoCtrl