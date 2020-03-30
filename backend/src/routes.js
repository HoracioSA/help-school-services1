const express = require('express')
const UnivController = require('./controllers/UniversitiesController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const LoginController = require('./controllers/LoginController');
const Routes = express.Router()
Routes.get('/universities', UnivController.index);
Routes.get('/incidents', IncidentController.index);
Routes.get('/profile', ProfileController.index);
Routes.post('/login', LoginController.create);
Routes.post('/universities', UnivController.create);
Routes.post('/incidents', IncidentController.create);
Routes.delete('/incidents/:id', IncidentController.delete);

module.exports = Routes;