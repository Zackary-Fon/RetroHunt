import React from 'react';
import { Switch, Route } from "react-router-dom";
import tabRoutes from './const';
import '../general.css';

const Main = () =>{
    
    //établissement des routes pour que les liens soient fonctionnels, on récupére le tableau des routes
    // et on mappe celles-ci, id 0 est particulier car c'est l'accueil et la route est "/"
    // donc on a besoin de que ce soit un exact path car sinon celà renvoie vers toutes les
    // routes commençant par "/"
    const Routes = () => {
        const routesResult = tabRoutes.map(route => {
            console.log(route)
            if (route.id ===0 ){
                return <Route key={route.id} exact path={route.path} component={route.component} />
            } else {
                return <Route key={route.id} path={route.path} component={route.component} />
            }
        })
        console.log(routesResult)
        return routesResult
    }
    
    
    //cet élément sert de body et se situe entre le header et le footer il change selon
    //le lien sur lequel on a cliqué
    return(
        <div className="body">
            <Switch>
            {Routes()}
            </Switch>
        </div>
    )

}

export default Main;