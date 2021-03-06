const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const AnnonceSchema = new Schema({
   
    Titre:String,
    Console:String,
    Date: String,
    Prix: String,
    Etat: String,
    Localisation: String,
    PseudoVendeur: String,
    MailVendeur:String,
    Categorie: String,
    Description:String,
    image:Array,
    thumbnail:Array,
    cloudinary_id:String,
},{collection: "ANNONCE_COLLEC"});

const Annonce = mongoose.model('annonce',AnnonceSchema);


module.exports = Annonce;
