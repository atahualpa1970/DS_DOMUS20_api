const mongoose = require('mongoose')

mongoose
    .connect('mongodb://localhost/contactDB', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    })
    .then(db => console.log('MongoDB conected'))
    .catch(err => console.error(err))
