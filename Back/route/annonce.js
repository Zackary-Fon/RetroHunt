const {home,CreateAnn,GetPlay,Getall,Getdate,Getid,Getidbyuser, UpdateAnn, deleteAnn} = require('../controllers/controller-annonce');
const {CreateUser,GetUser,Log, authenticateToken,deleteUser, GetAnn}= require('../controllers/controller-user');
const express=require('express');
const { route } = require('../app/app');
const router=express.Router();
const cloudinary = require("../image/upload"); 
const upload=require('../image/multer')

router.route('/user') 
    .post(CreateUser)
router .route('/Profil/Annonce')
.post(GetAnn)
router.route('/deposer')
    .post(upload.array('image'), CreateAnn) 

router.route('/categorie')
    .post(GetPlay)
    
router.route('/all')
    .get(Getall)

router.route('/date')
    .get(Getdate)
router.route('/id')
.post(Getid)
router.route('/idUser')
.post(Getidbyuser)
router.route('/Update')
.post(UpdateAnn)
router.route('/login')
    .post(Log)
router.route('/auth')
    .post(authenticateToken,GetUser)
router.route('/delete')
    .post(deleteUser)
router.route('/delete/annonce')
.post(deleteAnn)
    module.exports=router;