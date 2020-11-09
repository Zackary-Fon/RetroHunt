const Annonce = require('../models/model-annonce');
const bodyParser = require('body-parser');
const data=require('../data/bd');
module.exports = {
home(req,res){
    res.render('index')
}
}