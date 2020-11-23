const {home,CreateAnn,GetPlay} = require('../controllers/controller-annonce');
const {CreateUser,GetUser,Log, authenticateToken}= require('../controllers/controller-user');
const express=require('express');
const { route } = require('../app/app');
const router=express.Router();


router.route('/')
.get(home)

router.route('/user')
.post(CreateUser)
.get(GetUser)

router.route('/deposer')
.post(CreateAnn)
.get(GetPlay)

router.route('/login')
.post(Log)
.get(authenticateToken,GetUser)
    module.exports=router;