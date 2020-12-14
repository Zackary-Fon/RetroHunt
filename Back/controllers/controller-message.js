const Message = require('../models/model-message');
const Conv = require('../models/model-conversation');
const data = require('../data/bd');
const bodyParser = require('body-parser');

module.exports = {
    Createconv(req,res){
        Conv.findOne({Acheteur:req.body.Acheteur,
            Vendeur:req.body.Vendeur})
            .then((user)=>{
                if(user === null){
                    const conv=new Conv({
                        Acheteur:req.body.Acheteur,
                        Vendeur:req.body.Vendeur,
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
        Conv.updateOne({Acheteur:req.body.Acheteur,
            Vendeur:req.body.Vendeur}, {
            $push: {
                "Message": mess
            }
        }).then((user) => {
            console.log(user)
            console.log('add to user')
        })
        
    }
}