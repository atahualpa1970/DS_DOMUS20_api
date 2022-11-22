const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

app.set('port', 4000)

app.use(cors())
app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/reclamos', require('./routes/reclamo.routes'))
app.use('/api/props', require('./routes/prop.routes'))
app.use('/api/clientes', require('./routes/cliente.routes'))
app.use('/api/clientesprop', require('./routes/clienteprop.routes'))

module.exports = app