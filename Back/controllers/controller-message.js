const Message = require('../models/model-message');
const Conv = require('../models/model-conversation');
const data = require('../data/bd');
const bodyParser = require('body-parser');

module.exports = {
    Createconv(req,res){
        console.log(req.body)
        Conv.findOne({receveur:req.body.receveur,
            envoyeur:req.body.envoyeur})
            .then((user)=>{
                if(user === null){
                    const conv=new Conv({
                        receveur:req.body.receveur,
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
        Conv.updateOne({receveur:req.body.receveur,
            envoyeur:req.body.envoyeur}, {
            $push: {
                "Message": mess
            }
        }).then((user) => {
            console.log(user)
            console.log('add to user')
        })
        
    },
    Getconv(req,res){
        console.log(req.body)
        Conv.findOne({receveur:req.body.receveur,
            envoyeur:req.body.envoyeur})
        .then((conv)=>{
            console.log('la conv est :')
            console.log(conv)
            res.json(conv)
        })
    }
}