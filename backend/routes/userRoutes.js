const express = require('express');
const route = express.Router();

const signUp = require('../controllers/signup.controller')

route.post('/signup' ,signUp)

module.exports  = route;