const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://atahualpa1970:pruebatecnica01@cluster0.rbsfb.mongodb.net/contactDB', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    })
    .then(db => console.log('MongoDB conected'))
    .catch(err => console.error(err))
