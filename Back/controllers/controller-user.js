const env = require('dotenv').config();
const User = require('../models/model-user');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const data = require('../data/bd');
const jwt = require('jsonwebtoken');


module.exports = {
    async CreateUser(req, res) {
        console.log(req.body)
        if (req.body.nom == '' || req.body.prenom == '' || req.body.email == '' || req.body.Password == '' || req.body == '') {
            console.log("wtf dude")
            res.json('vide')
        } else {
            const findUser = await User.findOne({
                email: req.body.email
            });
            if (findUser) {
                res.json("L'utilisateur existe déjà");
            } else {
                const user = new User({
                    email: req.body.email,
                    Password: req.body.Password,
                    Nom: req.body.Nom,
                    Prenom: req.body.Prenom,
                    Pseudo: req.body.Pseudo,
                    PhotoProfil: req.body.PhotoProfil,
                    Annonces: req.body.Annonces
                });
                console.log('user saved');
                user.save();
                res.json("Ok");
            }
        }
    },
    GetUser(req, res) {
        User.findOne({
            email: req.user.email
        }).then((user) => {
            console.log(req.user)
            res.json(req.user)
        })
    },
    Log(req, res) {
        User.findOne({
            email: req.body.email
        }).then((user) => {
            if (user !== null) {
                bcrypt.compare(req.body.Password, user.Password, (function (error, same) {
                    if (same == true) {
                        console.log('good password');
                        const username = user;
                        const People = {
                            User: username
                        };
                        const accessToken = jwt.sign(People, process.env.ACCESS_TOKEN_SECRET);
                        res.json({text:"ok",
                            accessToken: accessToken
                        });
                        /* res.render("profil",{user:user}) */ // JWT dans ce coin ///JWT-> acces utilisateur depuis d'autres fonctions 
                    } else {
                        res.json("mauvais")
                    }
                }))

            } else {
                res.json("not found")
            }
        });

    },
    authenticateToken(req, res,next) {
        const token = req.body.token
        if (token == null) {
            return res.sendStatus(401)
        }
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) {
                res.sendStatus(403)
            }
            req.user = user
            next()
        }) 

    }
}

/// JWT -> LogIn 
//token -> Ci avec temps 