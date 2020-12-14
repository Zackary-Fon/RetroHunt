const mongoose = require('mongoose');
const Message=require('./model-message').schema;
const Schema = mongoose.Schema;


const ConvSchema = new Schema({
    Acheteur:String,
    Vendeur:String,
    Message: [Message]
},{collection: "CONVERSATION"});

const Conv = mongoose.model('conversation',ConvSchema);


module.exports = Conv;
