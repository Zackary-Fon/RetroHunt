const env = require('dotenv').config(); //declaration du dot env
const User = require('../models/model-user'); //declaration du modeel user
const Annonce=require('../models/model-annonce'); //declaration du model annonce
const bcrypt = require('bcrypt'); //instanciation de bcrypt
const jwt = require('jsonwebtoken'); //instanciation de jwt


module.exports = {

    GetAnn(req,res){ //recuparation d une annonce par son email vendeur
        Annonce.find({
            MailVendeur: req.body.email
        }).then((is)=>{
            res.send(is)
        })
    },

    CreateUser(req, res) { //creeation utilisateur
        if(req.body !=[]){ //si pas vide
           User.findOne({
                email: req.body.email
            }).then((us)=>{
                if(us != null){ //si user  deja crée
                console.log(us)
                res.json("L'utilisateur existe déjà");
            } else { //si pas deja crée
                const mail=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                //instanciation de ma regex mail
                const paswd= /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
                //instanciation de ma regex de everifiation de mot de passe fort
                if(mail.test(req.body.email) && paswd.test(req.body.Password))  {
                    //verification si les mail t password verifie  les regex
                const user = new User({ //creation de l user
                    email: req.body.email,
                    Password: req.body.Password,
                    Nom: req.body.Nom,
                    Prenom: req.body.Prenom,
                    Pseudo: req.body.Pseudo,
                    PhotoProfil: req.body.PhotoProfil,
                    Localisation: " ",
                    Annonces: req.body.Annonces
                });
                console.log('user saved');
                user.save(); //sauvegarde bdd
                res.json("Ok");
            }else{ //si regex pas ok
                console.log("ce n est pas des données possible")
            }
            }
        })
    
        }else  { //si req.body vide
        console.log("vide");
        res.json('vide')
        }
    },
    UpdateUser(req,res){ //modifier user 
        User.replaceOne(
            {_id:req.body.id}, //je cherche user par son id
            {_id:req.body.id , Nom: req.body.Nom , Prenom:req.body.Prenom , 
                email:req.body.email,Password:req.body.Password,
                Localisation: req.body.Localisation }) //je modifie ses info en bdd
                .then((user)=>{
                    console.log(user)
                })
    },

    GetUser(req, res) { //chercheer user par jwt 
        User.find({
            email:req.user.User.email // recherche d un utilisateur grace au token 
        }).then((user) => {
            res.json(user) //renvoie de l utilisateur
        })
    },
    Log(req, res) {
        User.findOne({
            email: req.body.email  // je cherche mon user
        }).then((user) => {
            console.log(user)  
            if (user !== null) {  //si j ai quelque chose
                bcrypt.compare(req.body.Password, user.Password, (function (error, same) { //je verifie son mot de passe 
                    if (same == true) { // si c'est le bon mdp
                        console.log('good password'); 
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

    authenticateToken(req, res,next) { //verification validiter du token
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

    deleteUser(req,res){ //suppression d un user
        User.deleteOne({email:req.body.email}).then(()=>{
            console.log('user delete')
            res.json("Deleted")})
    },
}