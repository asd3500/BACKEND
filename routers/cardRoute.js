const express = require('express')
const cardController = require('../controller/cardController')


const Router = express.Router()

Router.get('/cards', cardController.getCards)
Router.get('/cards/:id', cardController.getCard)
Router.post('/cards', cardController.addCard)


module.exports = Router