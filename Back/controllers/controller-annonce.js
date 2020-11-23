const Annonce = require('../models/model-annonce');
const bodyParser = require('body-parser');
const data=require('../data/bd');
module.exports = {
    CreateAnn(req,res){
        console.log(req.body)
         if (req.body.nom==''||req.body.prenom==''||req.body.email==''||req.body.Password=='' ||req.body==''){
            console.log("wtf dude")
        }else{ 
                    console.log(req.file)
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
        console.log('user saved');
        ann.save(); 
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
uploadImage(req, res){
        try {
          if (req.file && req.file.path) {
            const image = new Image({
            url: req.file.path,
      });
      image.save();
      return res.status(200).json({ msg: "image successfully saved" });
      } else {
        console.log(req.file);
        return res.status(422).json({ error: "invalid" });
          }
          } catch (error) {
        console.error(error);
       return res.status(500).json({ error: "some error occured" });
        }
      },
home(req,res){
    res.render('index')
}
}