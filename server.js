const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);

router.get('/message', function(req, res){
    console.log(res.header);
    res.header({
        "custom-header": "Nuestro header perzonalizado",
        "casa" : "Noe"
    });
    res.send("Hola desde get");
});

router.delete('/message', function(req, res){
    console.log(req.body);
    console.log(req.query);
    res.send("Hola " + req.body.text + " desde post con nodemon");
});
// // / Cualquier url
// app.use("/", function(req, res){
//     res.send("Hola mundo feliz");
// });

app.listen(3000);
console.log('La app esta escuchando en http://localhost:3000');