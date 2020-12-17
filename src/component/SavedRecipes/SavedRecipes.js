import { dom } from '@fortawesome/fontawesome-svg-core';
import React, {useState} from 'react';
import RecipeDetails from '../RecipeDetails'
import {BrowserRouter as Router} from react-router-dom;

import Bookmarkrecipe from "./Bookmarkrecipe"

const SavedRecipe = ({recipe}) => {
    const[show, setShow] = useState(false)
    
    let link = recipe.recipe.uri;
    let id = link.substring(51);
    console.log(id)
    const {label, image, url, ingredients} = recipe.
    recipe;

    var readsavedrecipes = JSON.parse(localStorage.getItem(savedrecipe))
    
    
    console.log(readsavedrecipes)

    return( 
    <Router>
        <div className="recipe">
            <Route path="/Bookmarkrecipe" component={header} />
            <h1>Saved Recipes</h1>
            <h2>{label}</h2>
            <img src={image} alt={label}/>
            <p>Total Calories = {recipe.recipe.calories.toFixed(2)}</p>
            <p>Health Labels = {recipe.recipe.healthLabels}</p>
            <p>Diet Labels = {recipe.recipe.dietLabels.length > 0 ? recipe.recipe.dietLabels : 'No Data'}</p>
            <a href = {url} target="_blank" rel="noopener noreferrer"> 
            Full Recipes!
            </a>
            <button onClick={() => setShow(!show)}>Ingredients</button>
            {show && <RecipeDetails ingredients={ingredients}/>}
        </div>
       
    </Router>
    );  
};

export default SavedRecipe;
