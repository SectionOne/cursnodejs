//Creem un arxiu per realitzar els mètodes que treballaran amb JWT
var jwt = require("jwt-simple"); //No oblidem de instal.lar la llibreria bcrypt, npm i bcrypt . Tambéd npm install jwt-simple
//Anem a realitzar el Payload que és l'objecte a on contindrem el token i a on situarem la data de creació del token i la de caducitat
var moment = require("moment"); //Executem npm i moment
var secret = "cibernarium";

exports.createToken = function(user){
    var payload = {
        //creem un objecte json
        sub: user._id,
        name: user.nom,
        surname: user.cognom,
        email: user.email,
        iat: moment().unix(), //Format Timestamp
        exp: moment().add(30, 'days').unix()
    };

    return jwt.encode(payload, secret);
};