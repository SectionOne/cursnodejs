'use strict'

var express = require("express");
var UsuariController = require("../controllers/usuari");

var api = express.Router();
var multipart = require("connect-multiparty");
var md_auth = require("../middleware/authenticated");

//middleware
var md_upload = multipart({ uploadDir: './uploads/users'});

api.get("/tots", UsuariController.proves);
api.post("/registre", UsuariController.guardarUsuari);
api.post("/veureusuari", md_auth.ensureAuth, UsuariController.veureUsuari); //Securitzem la ruta, obligant a passar per el middleware abans de accionar el controlador
api.get("/veuretotsusuari", UsuariController.veureTotsUsuari);
api.put("/actualitzar-usuari/:id", UsuariController.actualitzarUsuari);
api.delete("/borrarusuari/:id", UsuariController.borrarUsuari);
api.post("/upload-image-user/:id", [md_upload], UsuariController.uploadImages);
api.get("/all-image-user/:id", [md_upload], UsuariController.veureImgUsuari);
api.get("/veurearxiuimatge/:imageFile", UsuariController.veureArxiuImatge);
api.delete("/borrarimatge/:id", UsuariController.borrarImatge);
api.post("/login", UsuariController.loginUser);
// api.put("/actualitzar-usuari/:id?"); Afegim un ? al final, per poder dir que aquest parametre és opcional.
module.exports = api;