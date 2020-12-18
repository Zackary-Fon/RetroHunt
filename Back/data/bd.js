const mongoose=require('mongoose'); //instanciation de mongoose
const env=require('dotenv').config(); //declaration de dotenv
mongoose.Promise = global.Promise; //instanciation des promesses

mongoose.connect(process.env.MONGO_URI,{  //instanciation de la connexion
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection//connection a la bdd
.once('open',() => console.log("Connexion à MongoDB établie !")) //si ok 
.on('error',(error) => { //si erreur
    console.warn('Warning',error);
});

