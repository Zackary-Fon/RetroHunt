const Message = require('../models/model-message');
const Conv = require('../models/model-conversation');
const data = require('../data/bd');
const bodyParser = require('body-parser');

module.exports = {
    Createconv(req,res){
        Conv.findOne({receveur:req.body.receveur,
            envoyeur:req.body.envoyeur,TitreAnnonce:req.body.Titre})
            .then((user)=>{
                if(user === null){
                    const conv=new Conv({
                        receveur:req.body.receveur,
                        TitreAnnonce:req.body.Titre,
                        IdAnn:req.body.IdAnn,
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
            Date:req.body.Date,
            aEnvoye:req.body.envoyé,
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
        console.log(req.body)
        Conv.findOne({receveur:req.body.receveur,
            envoyeur:req.body.envoyeur,
            TitreAnnonce:req.body.Titre})
        .then((conv)=>{
            console.log(conv)
            res.json(conv)
        })
    },
    GetConvbyId(req,res){
        console.log(req.body)
        Conv.findOne({_id:req.body.id})
        .then((c)=>{
            console.log(c)
            res.send(c)
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