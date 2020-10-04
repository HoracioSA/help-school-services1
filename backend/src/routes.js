const express = require('express')
const {celebrate, Segments, Joi} = require('celebrate');
const UnivController = require('./controllers/UniversitiesController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const LoginController = require('./controllers/LoginController');
const Routes = express.Router()
Routes.get('/universities', UnivController.index);
Routes.get('/incidents',celebrate({
    [Segments.QUERY]:Joi.object().keys({
        page:Joi.number(),
    })
}), IncidentController.index);
Routes.get('/profile',celebrate({
    [Segments.HEADERS]:Joi.object({
        authorization:Joi.string().required(),
    }).unknown()
}), ProfileController.index);
Routes.post('/login', LoginController.create);
// celebrate({
//     [Segments.BODY]:Joi.object().keys({
//         id:Joi.string().required(),
        
//     })
// })

Routes.post('/universities',celebrate({
    [Segments.BODY]:Joi.object().keys({
        name:Joi.string().required(),
        password:Joi.number().required(),
        email:Joi.string().required().email(),
        whatsapp:Joi.string().required().min(11).max(12),
        city:Joi.string().required(),
        uf:Joi.string().required().length(2)
    })
}), UnivController.create);
Routes.post('/incidents',celebrate({
    [Segments.HEADERS]:Joi.object({
        authorization:Joi.string().required()
    }).unknown()
}),celebrate({
    [Segments.BODY]:Joi.object().keys({
    title:Joi.string().required(),
    description:Joi.string().required().min(100),
    value:Joi.number().required()  
    })
}), IncidentController.create);
Routes.delete('/incidents/:id', IncidentController.delete);

module.exports = Routes;