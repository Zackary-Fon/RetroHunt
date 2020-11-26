const {home,CreateAnn,GetPlay,Getall,Getdate} = require('../controllers/controller-annonce');
const {CreateUser,GetUser,Log, authenticateToken}= require('../controllers/controller-user');
const express=require('express');
const { route } = require('../app/app');
const router=express.Router();
const cloudinary = require("../image/upload"); 
const upload=require('../image/multer')

router.route('/')
    .get(home)

router.route('/user')
    .post(CreateUser)

router.route('/deposer')
    .post(upload.single("image"), CreateAnn) 
    .get(GetPlay)
    
router.route('/all')
    .get(Getall)

router.route('/date')
    .get(Getdate)

router.route('/login')
    .post(Log)
    .get(authenticateToken,GetUser)
    module.exports=router;