const Annonce = require('../models/model-annonce'); //declaration des modeel annonce
const User = require('../models/model-user'); //declaration des model useer
const env = require('dotenv').config(); //recup des dot env
const cloudinary = require('../image/upload'); //declaration cloudinary
const upload = require('../image/multer'); //declaration multer 
const fs = require('fs') //declaration fs

module.exports = {  //exportation du controller pour annonce 
    async CreateAnn(req, res) { //creation d'unee annonce
        if(req.body != []){ //si pas vide
        const uploader = async (path) => await cloudinary.uploads(path, 'Images'); //instanciation de la formule d envoi cloudinary
        if (req.method === 'POST') { //SI c'est bien formulaire method POST
            const files = req.files //recup dees files
            const urls = [] //creation tableau url
            const thumb = [] //creation tableau thumbnail
            for (const file of files) { //Pour chaque fichier dans mon files
                const {path} = file //jee créee un objet qui prend le file
                const newPath = await cloudinary.uploader.upload(path, {
                    width: 300,height: 400}) //j envoiee a cloudinary la photo et je la redimension
                const thumbnail = await cloudinary.uploader.upload(path, {
                    width: 250,height: 250}) //j envoie la miniature a cloudinary redimensionné
                urls.push(newPath.secure_url) //je meet dans url l'url scure que cloudniary m envoie
                thumb.push(thumbnail.secure_url) //je met dans thumb l url secure des miniaturee
                fs.unlinkSync(path) // je supprime le fichieer qui vient d etre fait
            }
            const ann = new Annonce({ //creation de l annonce
                Titre: req.body.TitreAnnonce,
                Console: req.body.Console,
                Date: req.body.Date,
                Prix: req.body.Prix,
                Etat: req.body.Etat,
                Description: req.body.description,
                PseudoVendeur: req.body.loc,
                MailVendeur: req.body.mv,
                image: urls,
                thumbnail: thumb
                //cloudinary_id:result.public_id
            });
            console.log('annonce postée'); 
            ann.save(); //sauvegarde dans la bdd
            res.json("OK"); //envoie au front OK
        } else { //si erreur
            console.log("error"); 
            res.send("error");

        }}
    else { //si vide
        console.log('vide');
        res.json('vide')
    }
    },

    GetPlay(req, res) { //recuperation des jeux par console
        Annonce.find({
            Console: req.body.title
        }).then((ann) => {
            res.send(ann)
        })
    },

    Getall(req, res) { //reecuperation de toute les annonces
        Annonce.find()
        .then((ann) => {
            res.send(ann)
        })
    },
    Getid(req, res) { //recup annonce par ID
        Annonce.find({
            _id: req.body._id
        }).then((anno) => {
            res.send(anno)
        })
    },
    UpdateAnn(req,res){ //met a jour une annonce ( modif annonce)
        console.log(req.body)
        Annonce.update(
            { _id: req.body._id },
            {
            $set: {
            Titre:req.body.Titre,
            Console: req.body.Console,
            Date: req.body.Date,
            Prix: req.body.Prix,
            Etat: req.body.Etat,
            Description: req.body.Description
            }
            }
        )
            .then((user)=>{
                console.log(user)
            })
    },

    deleteAnn(req,res){ //supprimer une annonce
    Annonce.deleteOne({
        _id:  req.body.id}
    ).then((anno) => { 
       console.log("ok")
       res.json("deleted")
        })
   }
}