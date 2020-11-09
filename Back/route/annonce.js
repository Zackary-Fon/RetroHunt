const {home} = require('../controllers/controller-annonce');

const express=require('express');
const { route } = require('../app/app');
const router=express.Router();


router.route('/')
.get(home)
    module.exports=router;