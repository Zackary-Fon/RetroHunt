const Message = require('../models/model-message');
const Conv = require('../models/model-conversation');
const data = require('../data/bd');
const bodyParser = require('body-parser');

module.exports = {
    Createconv(req,res){
        Conv.findOne({receveur:req.body.receveur,
            envoyeur:req.body.envoyeur,TitreAnnonce:req.body.Titre,})
            .then((user)=>{
                if(user === null){
                    const conv=new Conv({
                        receveur:req.body.receveur,
                        TitreAnnonce:req.body.Titre,
                        envoyeur:req.body.envoyeur,
                        Message: req.body.Message
                    })
                    console.log('message envoyé');
                    conv.save();
                    res.json("OK");
                }else{
                    console.log('deja');
                    res.json("deja une conv")
                }
            })
       
    },
    AddMessage(req,res){
        const mess=new Message({
            message: req.body.message,
            Date:req.body.Date
        })
        console.log(req.body)
       
       Conv.updateOne({receveur:req.body.receveur,
            envoyeur:req.body.envoyeur,
            TitreAnnonce:req.body.Titre}, {
            $push: {
                "Message": mess
            }
        }).then((user) => {
            console.log('add to user')
            res.json("OK")
        }) 
        
    },
    Getconv(req,res){
        Conv.findOne({receveur:req.body.receveur,
            envoyeur:req.body.envoyeur,
            TitreAnnonce:req.body.Titre})
        .then((conv)=>{
            res.json(conv)
        })
    },
    GetEnvoie(req,res){
        console.log(req.body)
        Conv.find({envoyeur: req.body.email}).then((env)=>{
            res.json(env)
        }
        )
    },
    GetEnvoiereceveur(req,res){
        Conv.find({receveur: req.body.email}).then((env)=>{
            res.json(env)
        }
        )
    },

}