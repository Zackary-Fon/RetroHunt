import ConnexionInscription from "../Pages/ConnexionInscription/ConnexionInscription";
import Home from "../Pages/Home/Home";
import Legal from "../Pages/Legal/Legal";
import Product from "../Pages/Product/Product";
import Profil from "../Pages/Profil/Profil";
import Searching from "../Pages/Search/Search";
import Categorie from "../Pages/Catégorie/Categorie";
import ref from "../Pages/AjouterAnnonce/referentiel";
import Produit from "../Pages/Profil/ProduitProfile";
import Annonce from "../Pages/Profil/Annonces/Annonces";
import modifProfil from "../Pages/Profil/modifProfil";
import Chat from "../Pages/Chat/Chat";
import modifAnn from "../Pages/Profil/Annonces/ModificationAnnonce";
import conv from "../Pages/Profil/Conversations/conversation";
import ConvProf from "../Pages/Profil/Conversations/Conv";
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
{id:17, name:"Conv", path:"/Conv/:id", component:conv},
{id:18, name:"Conversation", path:"/Conversation/:id", component:ConvProf},
]
export default tabRoutes;
