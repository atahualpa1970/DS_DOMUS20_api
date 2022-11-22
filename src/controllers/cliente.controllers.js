const clienteCtrl = {}

const Cliente = require('../models/clientes')

clienteCtrl.getClientes = async (req, res) => {
  const clientes = await Cliente.find()
  res.json(clientes)
}

clienteCtrl.createCliente = async (req, res) => {
  const newCliente = new Cliente(req.body)
  await newCliente.save()
  res.send({ status: 'Cliente creado' })
}

clienteCtrl.getCliente = async (req, res) => {
  const cliente = await Cliente.findById(req.params.id)
  res.send(cliente)
}

clienteCtrl.getClienteProps = async (req, res) => {
  const cliente = await Cliente.aggregate([
    { $match: { id: parseInt(req.params.codCli) } },
    {
      $lookup: {
        from: 'clientesprop',
        localField: 'id',
        foreignField: 'idCliente',
        as: 'propiedades'
      }
    },
    {
      $lookup: {
        from: 'props',
        localField: 'propiedades.idPropiedad',
        foreignField: 'id',
        as: 'propiedades'
      }
    }
  ]);
  res.send(cliente)
}

clienteCtrl.searchClienteName = async (req, res) => {
  const data = JSON.parse(req.params.data)
  let searchOr = []
  data.forEach(element => {
    const key = Object.keys(element)[0]
    const compare = {}
    compare[key] = {$regex: new RegExp(`${element[key]}`, 'i')}
    searchOr.push(compare)
    console.log("COMPARE: ", searchOr)
  })
  const apellido = new RegExp(`${data.apellido}`, 'i');
  const nombre = new RegExp(`${data.nombre}`, 'i');
  const cliente = await Cliente.find(
      {$or: searchOr })
  console.log("CLI: ", cliente)
  res.send(cliente)
}

clienteCtrl.updateCliente = async (req, res) => {
  await Cliente.findByIdAndUpdate(req.params.id, req.body)
  res.send({ status: "Cliente modificado" })
}

clienteCtrl.deleteCliente = async (req, res) => {
  await Cliente.findByIdAndDelete(req.params.id)
  res.send({ status: "Cliente eliminado" })
}

module.exports = clienteCtrl