const env = require('dotenv').config();
const User = require('../models/model-user');
const Annonce=require('../models/model-annonce');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const data = require('../data/bd');
const jwt = require('jsonwebtoken');


module.exports = {
    GetAnn(req,res){
        console.log(req.body)
        Annonce.find({
            MailVendeur: req.body.email
        }).then((is)=>{
            res.send(is)
        })
    },
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
        User.find({
            email:req.user.User.email // recherche d un utilisateur grace au token 
        }).then((user) => {
            res.json(user) //renvoie de l utilisateur
        })
    },
    Log(req, res) {
        console.log(req.body)
        User.findOne({
            email: req.body.email  // je cherche mon user
        }).then((user) => {  
            if (user !== null) {  //si j ai quelquechose
                bcrypt.compare(req.body.Password, user.Password, (function (error, same) { //je verifie son mot de pass
                    if (same == true) { // si c'est pareil
                        console.log('good password'); 
                        console.log(user)
                        const People = { // j enregistre mon user dans un objet
                            User: user
                        };
                        const accessToken = jwt.sign(People, process.env.ACCESS_TOKEN_SECRET); //je demande un jeton d acces a mon jwt
                        res.json({text:"ok",
                            accessToken: accessToken // il m envoie en front le token
                        });
                        
                    } else { 
                        res.json("mauvais") //sinon il y a une erreur de mot de passe
                        console.log(error) //afficher l erreur
                    }
                }))

            } else {
                res.json("not found") //si user pas trouver le dire a mon front
            }
        });

    },
    authenticateToken(req, res,next) {
        const token = req.body.token; // je recupere le token envoyer par le front
        if (token == null) { // si j ai rien
            return res.sendStatus(401)
        }
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => { //sinon je verifie si le token est bon
            if (err) { //si non je repond 403
                res.sendStatus(403)
            }
            req.user = user // si oui j enregistre dans req.user mon utilisateur trouvé
            console.log(req.user)
            next() //obligatoire car middleware
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