const { Schema, model } = require('mongoose')

const clienteSchema = new Schema({
  id: { type: Number, required: true },
  tipoDeCliente: { type: String },
  apellido: { type: String },
  nombre: { type: String },
  dni: { type: Number },
  cuit: { type: String },
  fechaDeNacimiento: { type: String },
  nroCelular: { type: String },
  email: { type: String }
}, {
  timestamps: true,
  versionKey: false
})

module.exports = model('cliente', clienteSchema)