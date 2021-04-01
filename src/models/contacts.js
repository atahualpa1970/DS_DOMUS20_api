const { Schema, model } = require('mongoose')

const contactSchema = new Schema({
    name: {type: String, required: true},
    lastname: {type: String, required: true},
    nickname: {type: String},
    phonenumber: {type: String},
    email: {type: String},
    picture: {type: String},
}, {
    timestamps: true,
    versionKey: false
})

module.exports = model('contact', contactSchema)