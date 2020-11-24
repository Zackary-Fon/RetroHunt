const Annonce = require('../models/model-annonce');
const data=require('../data/bd');
const env=require('dotenv').config();
const bodyParser = require('body-parser');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

module.exports = {
    CreateAnn(req,res){
        console.log(req.body)
         if (req.body.TitreAnnonce==''||req.body.Date==''||req.body.Prix==''||req.body.description=='' ){
            console.log("wtf dude")
            res.json("error")
        }else{ 
            const ann=new Annonce({
                Titre:req.body.TitreAnnoncee,
                Console:req.body.Console,
                image: req.file,
                Date: req.body.Date,
                Prix: req.body.Prix,
                Etat: req.body.etat,
               /*  Localisation: String, */
                /* PseudoVendeur: String, */
                Description:req.body.description
        });
        console.log('annonce poster');
        
        ann.save(); 
        res.json("OK")
        }
    },
    GetPlay(req,res){
        Annonce.find({Console:"play1"}).then((ann)=>{
            res.send(ann)
        })
    }, 
    Getall(req,res){
        Annonce.find().then((ann)=>{
            res.send(ann)
        })
    },
    Getdate(req,res){
        Annonce.find({Date:"2050"}).then((anno)=>{
            res.send(anno)
        })
    },
home(req,res){
    res.render('index')
}
}