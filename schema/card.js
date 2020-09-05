const mongo = require('mongoose')
const Schema = mongo.Schema

const cardSchema = new Schema({
    title: String,
    done: Boolean
})

const card = mongo.model('card', cardSchema)

module.exports = card