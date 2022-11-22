const { Schema, model } = require('mongoose')

const reclamoSchema = new Schema({
  id: { type: Number, required: true },
  propiedad: { 
    id: { type: Number, required: true }
  },
  clienteQueReclama: { 
    id: { type: Number, required: true }
  },
  secretariaCreadora: { 
    id: { type: Number, required: true }
  },
  prioridad: { type: String },
  descripcion: { type: String },
  fechaDeApertura: { type: String },
  nombreDeContacto: { type: String },
  telefonoDeContacto: { type: String }
}, {
  timestamps: true,
  versionKey: false
})

module.exports = model('reclamo', reclamoSchema)