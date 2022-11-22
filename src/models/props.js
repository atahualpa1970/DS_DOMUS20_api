const { Schema, model } = require('mongoose')

const propSchema = new Schema({
  id: { type: Number, required: true },
  codigoProp: { type: String },
  alquiler: { type: Boolean },
  venta: { type: Boolean },
  activa: { type: Boolean },
  destacada: { type: Boolean },
  direccion: { type: String },
  tipoDePropiedad: { type: String },
  habitaciones: { type: Number },
  baños: { type: Number },
  garage: { type: String },
  fotos: { type: Array }
}, {
  timestamps: true,
  versionKey: false
})

module.exports = model('prop', propSchema)