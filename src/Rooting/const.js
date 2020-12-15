import ConnexionInscription from "../Pages/ConnexionInscription/ConnexionInscription";
import Home from "../Pages/Home/Home";
import Legal from "../Pages/Legal/Legal";
import Product from "../Pages/Product/Product";
import Profil from "../Pages/Profil/Profil";
import Searching from "../Pages/Search/Search";
import Categorie from "../Pages/Catégorie/Categorie";
import ref from "../Pages/AjouterAnnonce/referentiel";
import Produit from "../Pages/Profil/ProduitProfile";
import Annonce from "../Pages/Profil/Annonces";
import modifProfil from "../Pages/Profil/modifProfil";
import Chat from "../Pages/Chat/Chat";
import modifAnn from "../Pages/Profil/ModificationAnnonce";

import Crash_Bandicoot1 from "./ImagesProduits/Crash_Bandicoot1.jpg";
import Spyro1 from "./ImagesProduits/Spyro1.jpg";
import Space_Invaders from "./ImagesProduits/Space_Invaders.png";
import Super_Mario_Bros3 from "./ImagesProduits/Super_Mario_Bros3.jpg";
import Sonic_The_Hedgehog2 from "./ImagesProduits/Sonic_The_Hedgehog2.jpg";
import Zelda_Ocarina_Of_Time from "./ImagesProduits/Zelda_Ocarina_Of_Time.jpg";
import AjouterAnnonce from "../Pages/AjouterAnnonce/AjouterAnnonce";
import SuppProfil from "../Pages/Profil/SupprimerProfil";
import contact from "../Pages/Contact/Contact"

//tableau des routes
const tabRoutes = [
{id:0, name:"Home", path:"/", component:Home},
{id:1, name:"Catégories", path:"/Categorie/:title", component:Categorie},
{id:2, name:"Connexion/inscription", path:"/ConnexionInscription", component:ConnexionInscription},
{id:3, name:"Profil", path:"/Profil", component:Profil},
{id:4, name:"Déposer une annonce", path:"/DeposerAnnonce", component:AjouterAnnonce},
{id:5, name:"Product", path:"/Product/:id", component:Product},
{id:6, name:"Search", path:"/Search", component:Searching},
{id:7, name:"Legal", path:"/Legal", component:Legal},
{id:8, name:"SuppProfil", path:"/DeleteProfile", component:SuppProfil},
{id:9,name:"Referentiel", path:"/Referentiel", component:ref},
{id:10,name:"Contact", path:"/Contact", component:contact},
{id:11, name:"Produit", path:"/Produit/:id", component:Produit},
{id:13, name:"Annonce", path:"/Annonce/:id", component:Annonce},
{id:14, name:"ModifProfil", path:"/Modif/", component:modifProfil},
{id:15, name:"Chat", path:"/Chat/:id", component:Chat},
{id:16, name:"ModifAnn", path:"/ModifAnn/:id", component:modifAnn},
]
export default tabRoutes;

//tableau servant de "base de données" dans lequel sont stockées de fausses annonces
export const ObjectProduct = [
    {id:0, img: Crash_Bandicoot1, name:"Crash", url:"https://www.jeuxvideo.com/jeux/playstation-ps1/00001197-crash-bandicoot.htm", category:"PS1", userName:"Michou", datePost:"09/03/2020", prix:"60€"},
    {id:1, img: Spyro1, name:"Spyro", url:"https://www.jeuxvideo.com/jeux/playstation-ps1/00001478-spyro-the-dragon.htm", category:"PS1", userName:"Michou", datePost:"20/03/2020", prix:"50€"},
    {id:2, img: Super_Mario_Bros3, name:"Super Mario Bros 3", url:"https://www.jeuxvideo.com/jeux/nes/00006909-super-mario-bros-3.htm", category:"NES", userName:"Jean", datePost:"26/05/2020", prix:"35€"},
    {id:3, img: Space_Invaders, name:"Space Invaders", url:"https://www.jeuxvideo.com/jeux/atari-vcs-2600/00049404-space-invaders.htm", category:"Atari 2600", userName:"Pierre", datePost:"07/06/2020", prix:"45€"},
    {id:4, img: Sonic_The_Hedgehog2, name:"Sonic the Hedgehog 2", url:"https://www.jeuxvideo.com/jeux/megadrive/00002033-sonic-the-hedgehog-2.htm", category:"Sega Megadrive", userName:"Paul", datePost:"19/06/2020", prix:"20€"},
    {id:5, img: Zelda_Ocarina_Of_Time, name:"The Legend of Zelda : Ocarina of Time", url:"https://www.jeuxvideo.com/jeux/jeu-56411/", category:"Nintendo 64", userName:"Jacques", datePost:"27/06/2020", prix:"30€"},
    {id:6, img: Crash_Bandicoot1, name:"Crash", url:"https://www.jeuxvideo.com/jeux/playstation-ps1/00001197-crash-bandicoot.htm", category:"PS1", userName:"Michou", datePost:"09/03/2020", prix:"60€"},
    {id:7, img: Spyro1, name:"Spyro", url:"https://www.jeuxvideo.com/jeux/playstation-ps1/00001478-spyro-the-dragon.htm", category:"PS1", userName:"Michou", datePost:"20/03/2020", prix:"50€"},
    {id:8, img: Super_Mario_Bros3, name:"Super Mario Bros 3", url:"https://www.jeuxvideo.com/jeux/nes/00006909-super-mario-bros-3.htm", category:"NES", userName:"Jean", datePost:"26/05/2020", prix:"35€"},
    {id:9, img: Space_Invaders, name:"Space Invaders", url:"https://www.jeuxvideo.com/jeux/atari-vcs-2600/00049404-space-invaders.htm", category:"Atari 2600", userName:"Pierre", datePost:"07/06/2020", prix:"45€"},
    {id:10, img: Sonic_The_Hedgehog2, name:"Sonic the Hedgehog 2", url:"https://www.jeuxvideo.com/jeux/megadrive/00002033-sonic-the-hedgehog-2.htm", category:"Sega Megadrive", userName:"Paul", datePost:"19/06/2020", prix:"20€"},
    {id:11, img: Zelda_Ocarina_Of_Time, name:"The Legend of Zelda : Ocarina of Time", url:"https://www.jeuxvideo.com/jeux/jeu-56411/", category:"Nintendo 64", userName:"Jacques", datePost:"27/06/2020", prix:"30€"}
];
