const env=require('dotenv').config();
const User = require('../models/model-user');
const bodyParser = require('body-parser');
const bcrypt=require('bcrypt');
const data=require('../data/bd');
const jwt=require('jsonwebtoken');


module.exports = {
CreateUser(req,res){
        const user=new User({
            email:req.body.email,
            Password: req.body.Password,
            Nom: req.body.Nom,
            Prenom: req.body.Prenom,
            Pseudo: req.body.Pseudo,
            PhotoProfil:req.body.PhotoProfil,
            Annonces:req.body.Annonces
    });
    console.log('user saved');
    user.save(); 
},
GetUser(req,res){
    console.log("ok ? ")
    console.log(req.user)
    res.send(req.user)
 
},
Log(req,res){
    User.findOne({email: req.body.email}).then((user)=>{
        //bcrypt.compare(password,this.local.password)
        if(user!== null){
            bcrypt.compare(req.body.Password,user.Password,(function(error,same){
                console.log(same);
                if(same==true){
                    console.log('good password');
                    const username=user;
                    const People={User:username};
                    const accessToken=jwt.sign(People,process.env.ACCESS_TOKEN_SECRET);
                    res.json({accessToken:accessToken});
                    /* res.render("profil",{user:user}) */ // JWT dans ce coin ///JWT-> acces utilisateur depuis d'autres fonctions 
                }
                else{
                    res.send(error)
                }
            }))
            
        }else{
            res.sendStatus(401).send('Utilisateur non reconnu')
        }});
    
},
authenticateToken(req,res,next){
    const authHeader=req.headers['authorization']
    const token=authHeader && authHeader.split(' ')[1]
    if(token==null) {
        return res.sendStatus(401)
    }
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
        if(err){
            res.sendStatus(403)
        }
        req.user=user
        next()
    })

}
}

/// JWT -> LogIn 
//token -> Ci avec temps 