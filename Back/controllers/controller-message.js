const Message = require('../models/model-message'); //instanciation du model message
const Conv = require('../models/model-conversation'); //instanciation du model COnv

module.exports = { 
    Createconv(req,res){   //Creation d'une conversation
        Conv.findOne({receveur:req.body.receveur,
            envoyeur:req.body.envoyeur,TitreAnnonce:req.body.Titre}) //je cherche si une conv existe deja ou non 
            .then((user)=>{
                if(user === null){ //si pas de conv
                    const conv=new Conv({ //je crée une conv
                        receveur:req.body.receveur,
                        TitreAnnonce:req.body.Titre,
                        IdAnn:req.body.IdAnn,
                        envoyeur:req.body.envoyeur,
                        Message: req.body.Message
                    })
                    console.log('message envoyé');
                    conv.save(); //sauvegarde bdd
                    res.json("OK"); //rep front
                }else{ //si une conv
                    console.log('deja');
                    console.log(req.body.Message[0].message)
                    const mess=new Message({ //creation du message
                        message: req.body.Message[0].message,
                        Date:req.body.Message[0].Date,
                        aEnvoye:req.body.Message[0].aEnvoye,
                    })
                   console.log(mess)
                   Conv.updateOne(
                       {receveur:req.body.receveur, 
                        envoyeur:req.body.envoyeur,
                        TitreAnnonce:req.body.Titre},  //recherche la conv avec ces info la
                        {
                        $push: {  //je push dans mon tableau message le nouveau message
                            "Message": mess
                        }
                    }).then(() => {
                        console.log('add to user')
                        res.json("OK") 
                    }) 
                }
            })
       
    },
    Getconv(req,res){ //recherche de conversation
        Conv.findOne({receveur:req.body.receveur,
            envoyeur:req.body.envoyeur,
            TitreAnnonce:req.body.Titre})
        .then((conv)=>{
            console.log(conv)
            res.json(conv)
        })
    },

    GetConvbyId(req,res){ //recherche d'une conversation grace a son id
        Conv.findOne({_id:req.body.id})
        .then((c)=>{
            console.log(c)
            res.send(c)
        })
    },

    GetEnvoie(req,res){ //recherche conversation quand j'envoie
        console.log(req.body)
        Conv.find({envoyeur: req.body.email}).then((env)=>{
            res.json(env)
        }
        )
    },
    GetEnvoiereceveur(req,res){ //recherche conv quand je recoit
        Conv.find({receveur: req.body.email}).then((env)=>{
            res.json(env)
        }
        )
    },

}