require('./database')
const app = require('./app')

app.listen(app.get(process.env.PORT || 'port'))
console.log('Server on port:', app.get('port'))