const Annonce = require('../models/model-annonce');
const bodyParser = require('body-parser');
const data=require('../data/bd');
module.exports = {
    CreateAnn(req,res){
        console.log(req.body)
         if (req.body.nom==''||req.body.prenom==''||req.body.email==''||req.body.Password=='' ||req.body==''){
            console.log("wtf dude")
        }else{ 
            if(req.body != {}){
            const ann=new Annonce({
                Titre:req.body.TitreAnnoncee,
                Console:req.body.Console,
                /* Photo:String, */
                Date: req.body.Date,
                Prix: req.body.Prix,
                Etat: req.body.etat,
               /*  Localisation: String, */
                /* PseudoVendeur: String, */
                Description:req.body.description
        });
        console.log('user saved');
        ann.save();  } else{
            console.log('tu fais chier')
        }}
    },
    GetPlay(req,res){
        Annonce.find({Console:"play1"}).then((ann)=>{
            res.send(ann)
        })
    },
home(req,res){
    res.render('index')
}
}