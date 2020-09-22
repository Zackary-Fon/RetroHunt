import React from 'react';
import { Switch, Route } from "react-router-dom";

const Main = () =>{
    return (
        <div>
            <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/ConnectionInscription" component={ConnectionInscription}/>
            <Route path="/Product" component={Product}/>
            <Route path="/Profile" component={Profile}/>
            <Route path="/Search" component={Search}/>
            <Route path="/Legal" component={Legal}/> 
            </Switch>
        </div>
    )

}