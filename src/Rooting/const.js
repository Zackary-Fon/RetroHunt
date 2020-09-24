import ConnectionInscription from "../Pages/ConnectionInscription/ConnectionInscription";
import Details from "../Pages/Details/Details";
import Home from "../Pages/Home/Home";
import Legal from "../Pages/Legal/Legal";
import Product from "../Pages/Product/Product";
import Profile from "../Pages/Profile/Profile";
import Search from "../Pages/Search/Search";

 const tabRoutes = [
{id:0, name:"Home", path:"/", component:Home},
{id:1, name:"Connexion/inscription", path:"/ConnectionInscription", component:ConnectionInscription},
{id:2, name:"Profil", path:"/Profile", component:Profile},
{id:3, name:"Product", path:"/Product", component:Product},
{id:4, name:"Details", path:"/Details", component:Details},
{id:5, name:"Search", path:"/Search", component:Search},
{id:6, name:"Legal", path:"/Legal", component:Legal}
]

const objectProduct = [
    {id:0, name:"Crash", url:"https://www.jeuxvideo.com/jeux/playstation-ps1/00001197-crash-bandicoot.htm", category:"PS1", userName:"Michou", datePost:"09/03/2020"},
    {id:1, name:"Spyro", url:"https://www.jeuxvideo.com/jeux/playstation-ps1/00001478-spyro-the-dragon.htm", category:"PS1", userName:"Michou", datePost:"20/03/2020"},
    {id:2, name:"Super Mario Bros 3", url:"https://www.jeuxvideo.com/jeux/nes/00006909-super-mario-bros-3.htm", category:"NES", userName:"Jean", datePost:"26/05/2020"},
    {id:3, name:"Space Invaders", url:"https://www.jeuxvideo.com/jeux/atari-vcs-2600/00049404-space-invaders.htm", category:"Atari 2600", userName:"Pierre", datePost:"07/06/2020"},
    {id:4, name:"Sonic the Hedgehog 2", url:"https://www.jeuxvideo.com/jeux/megadrive/00002033-sonic-the-hedgehog-2.htm", category:"Sega Megadrive", userName:"Paul", datePost:"19/06/2020"},
    {id:5, name:"The Legend of Zelda : Ocarina of Time", url:"https://www.jeuxvideo.com/jeux/jeu-56411/", category:"Nintendo 64", userName:"Jacques", datePost:"27/06/2020"}
]
export {objectProduct};
export default tabRoutes;