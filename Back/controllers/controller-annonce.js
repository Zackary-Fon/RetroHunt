const Annonce = require('../models/model-annonce');
const data=require('../data/bd');
const env=require('dotenv').config();
const bodyParser = require('body-parser');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const cloudinary = require('../image/upload');
const upload=require('../image/multer')

module.exports = {
    async CreateAnn(req,res){
    try{
        const result=await cloudinary.uploader.upload(req.file.path)
            const ann=new Annonce({
                Titre:req.body.TitreAnnonce,
                Console:req.body.Console,
                Date: req.body.Date,
                Prix: req.body.Prix,
                Etat: req.body.Etat,
                Description:req.body.description,
                image: result.secure_url,
                cloudinary_id:result.public_id,
        });
        console.log('annonce poster');
        ann.save(); 
        res.json("OK");
        } 
    
    catch(err){
        console.log("error")
        res.json("error")
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