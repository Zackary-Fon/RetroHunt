const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MessageSchema = new Schema({
    message:String,
    aEnvoye:String,
    Date: String
},{collection: "MESSAGE_COLLEC"});

const Message = mongoose.model('message',MessageSchema);


module.exports = Message;
