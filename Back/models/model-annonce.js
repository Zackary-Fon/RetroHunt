const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const AnnonceSchema = new Schema({
   
    Titre:String,
    Console:String,
    Photo:String,
    Date: String,
    Prix: String,
    Etat: String,
    Localisation: String,
    PseudoVendeur: String,
    Categorie: String,
    Description:String
},{collection: "ANNONCE_COLLEC"});

const Annonce = mongoose.model('Annonce',AnnonceSchema);


module.exports = Annonce;
