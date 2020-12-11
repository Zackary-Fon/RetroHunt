const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MessageSchema = new Schema({
    Pseudo:String,
    Message:String
},{collection: "MESSAGE_COLLEC"});

const Message = mongoose.model('message',MessageSchema);


module.exports = Message;
