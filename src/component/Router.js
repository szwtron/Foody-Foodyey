import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"

import App from "../App"
import Lowfat from "../Filterapp/Low"
import HighProtein from "../Filterapp/High"
import Lowcarb from "../Filterapp/Lowcarb"
import Balanced from "../Filterapp/Balanced"

import About from "./aboutus/About"
import Bookmarkrecipe from "./SavedRecipes/Bookmarkrecipe"
import Home from "./home/Home"


const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/Search" component={App} exact />
            <Route path="/Balanced" component={Balanced} exact/>
            <Route path="/Lowfat" component={Lowfat} exact/>
            <Route path="/HighProtein" component={HighProtein} exact/>
            <Route path="/Lowcarb" component={Lowcarb} exact/>
            <Route path="/About" component={About} exact/>
            <Route path="/Bookmarkrecipe" component={Bookmarkrecipe} exact/>
        </Switch>
    </BrowserRouter>
);

export default Router;