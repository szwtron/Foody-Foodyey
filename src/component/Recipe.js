import React, {useState} from 'react';
import RecipeDetails from './RecipeDetails'
import ReactStars from "react-rating-stars-component";

const Recipe = ({recipe}) => {
    const[show, setShow] = useState(false)

    let link = recipe.recipe.uri;
    let id = link.substring(51);
    console.log(recipe)
    const {label, image, url, ingredients} = recipe.recipe;

    var recipeinfo={label:recipe.recipe.label, 
                    calories:recipe.recipe.calories, 
                    image:recipe.recipe.image, 
                    ingredients:recipe.recipe.ingredients,
                    id:id
    };
    
    //console.log(recipe.recipe.label);

    Storage.prototype.getArray = function(savedrecipe) {
        var thisArray = [];
        var fetchArrayObject = this.getItem(savedrecipe);
        if (typeof fetchArrayObject !== 'undefined') {
          if (fetchArrayObject !== null) { thisArray = JSON.parse(fetchArrayObject); }
        }
        return thisArray;
    }
      
    Storage.prototype.pushArrayItem = function(savedrecipe, id) {
        var existingArray = this.getArray(savedrecipe);
        existingArray.push(id);
        this.setItem(savedrecipe, JSON.stringify(existingArray));
        alert("Recipe Saved Succesfully");

    }

    return( 
    <div className="recipe">
        <h2>{label}</h2>
        <img src={image} alt={label}/>
        <p>Total Calories = {recipe.recipe.calories.toFixed(2)}</p>
        <p>Health Labels = {recipe.recipe.healthLabels}</p>
        <p>Diet Labels = {recipe.recipe.dietLabels.length > 0 ? recipe.recipe.dietLabels : 'No Data'}</p>
        {/* href = {url} */}
        <div className="stars">
            <ReactStars
                count={recipe.rating}
                size={20}
                color1={"#f4c10f"}
            ></ReactStars>
        </div>
        <a href = {url} target="_blank" rel="noopener noreferrer"> 
            Full Recipes!
            {/* <Link to={{ 
                pathname: `/FullRecipe/${recipe.recipe.uri}`, 
                state: { recipe: recipe.recipe.label }
                }}>Full Recipes!</Link> */}
        </a>
        <button onClick={() => setShow(!show)}>Ingredients</button>
        {show && <RecipeDetails ingredients={ingredients}/>}
        <button id="savebtn" onClick={()=>localStorage.pushArrayItem('savedrecipe', recipeinfo)}>Save Recipe</button>
    </div>
    );  

};

export default Recipe;
