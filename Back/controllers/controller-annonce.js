const Annonce = require('../models/model-annonce');
const User=require('../models/model-user');
const data=require('../data/bd');
const env=require('dotenv').config();
const bodyParser = require('body-parser');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const cloudinary = require('../image/upload');
const upload=require('../image/multer')
const fs=require('fs')
module.exports = {
     async CreateAnn(req,res){
    
        console.log("A")
        const uploader = async (path) => await cloudinary.uploads(path, 'Images');

  if (req.method === 'POST') {
        const files=req.files
        console.log("B")
        const urls=[]
        for(const file of files){
          
             const {path}=file 
            const newPath=await cloudinary.uploader.upload(path)
            urls.push(newPath.secure_url)
            fs.unlinkSync(path)
            
        }
            const ann=new Annonce({
                Titre:req.body.TitreAnnonce,
                Console:req.body.Console,
                Date: req.body.Date,
                Prix: req.body.Prix,
                Etat: req.body.Etat,
                Description:req.body.description,
                PseudoVendeur: req.body.loc,
                MailVendeur: req.body.mv,
                image: urls,
                //cloudinary_id:result.public_id
        });
        console.log('annonce postée');
        ann.save();
        User.findOne({email:req.body.mv}).then((user)=>{
            User.updateOne({email:req.body.mv},{$push:{"Annonces" : ann }}).then((user)=>{
            console.log(user)})
            console.log('add to user')
        })  
         res.json("OK");  
    }else{
        console.log("error");
        res.send("error"); 
    
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