const Annonce = require('../models/model-annonce');
const User = require('../models/model-user');
const data = require('../data/bd');
const env = require('dotenv').config();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cloudinary = require('../image/upload');
const upload = require('../image/multer')
const fs = require('fs')
module.exports = {
    async CreateAnn(req, res) {
        console.log(req.body)
        if(req.body != []){
        const uploader = async (path) => await cloudinary.uploads(path, 'Images');
        if (req.method === 'POST') {
            const files = req.files
            const urls = []
            const thumb = []
            for (const file of files) {
                const {path} = file
                const newPath = await cloudinary.uploader.upload(path, {
                    width: 300,height: 400})
                const thumbnail = await cloudinary.uploader.upload(path, {
                    width: 250,height: 250})
                urls.push(newPath.secure_url)
                thumb.push(thumbnail.secure_url)
                fs.unlinkSync(path) // ??
            }
            const ann = new Annonce({
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
            ann.save();
           /*  User.findOne({
                email: req.body.mv
            }).then((user) => {
                User.updateOne({
                    email: req.body.mv
                }, {
                    $push: {
                        "Annonces": ann
                    }
                }).then((user) => {})
                console.log('add to user')
            }) */
            res.json("OK");
        } else {
            console.log("error");
            res.send("error");

        }}
    else {
        console.log('vide');
        res.json('vide')
    }
    },
    GetPlay(req, res) {
        Annonce.find({
            Console: req.body.title
        }).then((ann) => {
            res.send(ann)
        })
    },
    Getall(req, res) {
        Annonce.find().then((ann) => {
            res.send(ann)
        })
    },
    Getdate(req, res) {
        Annonce.find({
            Date: "2050"
        }).then((anno) => {
            res.send(anno)
        })
    },
    Getid(req, res) {
        Annonce.find({
            _id: req.body._id
        }).then((anno) => {
            res.send(anno)
        })
    },
    Getidbyuser(req, res) {
        const ppp=[];

       User.find({
             Annonces:  {$elemMatch :{_id:req.body._id}}
        }).then((anno) => {
            //console.log(anno[0].Annonces)
            for(let i=0;i<anno[0].Annonces.length;i++){
                
                if(anno[0].Annonces[i]._id==req.body._id){
                    res.json(anno[0].Annonces[i])
                }
                //ppp.push(anno[0].Annonces[i]);
            }
            //res.json(ppp)
        })
    },
    UpdateAnn(req,res){
        console.log(req.body)
        User.findOne({
            Pseudo:  req.body.Prenom}
        ).then((anno) => { 
            console.log(anno.Annonces.length)
       for(let i=0;i<anno.Annonces.length;i++){
            if(anno.Annonces[i]._id==req.body._id){
                console.log(anno.Annonces[i])
                User.updateOne({
                email:anno.email
                }, {
                    $addToSet: {
                        "Annonces": anno.Annonces[i]
                    }
            } ).then((user)=>{
                console.log(user);
                console.log('ok')
            })
           }
        }
    }
        ) 
    },
   deleteAnn(req,res){
    Annonce.deleteOne({
        _id:  req.body.id}
    ).then((anno) => { 
       console.log("ok")
       res.json("deleted")
        })
   }
}