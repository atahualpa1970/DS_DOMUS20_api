require('dotenv').config();
//const CONNECTION_URL = "mongodb+srv://atahualpa1970:domus20grupo5@cluster0.rbsfb.mongodb.net/?retryWrites=true&w=majority"
const CONNECTION_URL = "mongodb://localhost:27017"
const DATABASE_NAME = "domus20";
const mongoose = require('mongoose')

mongoose
    .connect(CONNECTION_URL+"/"+DATABASE_NAME, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    })
    .then(db => console.log('MongoDB conected'))
    .catch(err => console.error(err))