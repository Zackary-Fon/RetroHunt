import React from 'react';
import { Switch, Route } from "react-router-dom";
import tabRoutes from './const';

const Main = () =>{
       
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

    
    return(
        <div>
            <Switch>
            {Routes()}
            </Switch>
        </div>
    )

}

export default Main;