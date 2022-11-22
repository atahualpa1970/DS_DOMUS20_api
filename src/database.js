require('dotenv').config();
const CONNECTION_URL = process.env.DATABASE_CONNECTION_URL;
const DATABASE_NAME = process.env.DATABASE_NAME;
const mongoose = require('mongoose')

mongoose
    .connect(CONNECTION_URL+"/"+DATABASE_NAME, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    })
    .then(db => console.log('MongoDB conected'))
    .catch(err => console.error(err))
