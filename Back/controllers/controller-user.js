const env = require('dotenv').config();
const User = require('../models/model-user');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const data = require('../data/bd');
const jwt = require('jsonwebtoken');


module.exports = {
    async CreateUser(req, res) {
        if(req.body !=[]){
           User.findOne({
                email: req.body.email
            }).then((us)=>{
                if(us != null){
                console.log(us)
                res.json("L'utilisateur existe déjà");
            } else {
                const mail=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                const paswd= /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
                if(mail.test(req.body.email) && paswd.test(req.body.Password))  {
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
            }else{
                console.log("ce n est pas des données possible")
            }
            }
        })
    
    }else  {
        console.log("vide");
        res.json('vide')
    }
    },
    GetUser(req, res) {
        User.findOne({
            email:req.user.User.email
        }).then((user) => {
            res.json(user)
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
        const token = req.body.token;
        if (token == null) {
            return res.sendStatus(401)
        }
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) {
                res.sendStatus(403)
            }
            req.user = user
            console.log(req.user)
            next()
        }) 

    },
    deleteUser(req,res){
        console.log(req.body)
        User.deleteOne({email:req.body.email}).then(()=>{
            console.log('user delete')
            res.json("Deleted")})
    },
}

/// JWT -> LogIn 
//token -> Ci avec temps 