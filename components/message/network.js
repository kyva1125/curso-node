const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router();

router.get('/', function (req, res) {
    console.log(res.header);
    res.header({
        "custom-header": "Nuestro header perzonalizado",
        "casa": "Noe"
    });
    response.success(req, res, "Lista de mensajes");
});

router.post('/', function (req, res) {

    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 201);
        })
        .catch(e => {
            response.error(req, res, "Informacion invalida", 400, "Esto es un error en el controlador");
        }); // Pueden venir en el body de la peticion

});

module.exports = router; // Exportamos