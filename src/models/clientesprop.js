const { Schema, model } = require('mongoose')

const clienteporpSchema = new Schema({
  idCliente: { type: Number, required: true },
  idPropiedad: { type: Number, required: true }
}, {
  timestamps: true,
  versionKey: false
})

module.exports = model('clienteporp', clienteporpSchema)