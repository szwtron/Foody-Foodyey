import React, {useState} from 'react';
import RecipeDetails from '../RecipeDetails'


export default function Savercp(){
    const[show, setShow] = useState(false)

    var savedarray = JSON.parse(localStorage.getItem('savedrecipe'));

    if(!savedarray || savedarray.length === 0)
    return(
        <div className="message">
            <h1>You Don't Have Any Saved Recipes</h1>
        </div>
    ) 

    
    return savedarray.map(isi => {
        const ingredients = isi.ingredients;

        Storage.prototype.getArray = function(savedrecipe) {
            var thisArray = [];
            var fetchArrayObject = this.getItem(savedrecipe);
            if (typeof fetchArrayObject !== 'undefined') {
              if (fetchArrayObject !== null) { savedrecipe = JSON.parse(fetchArrayObject); }
            }
            return thisArray;
        }

        Storage.prototype.deleteArray = function(savedrecipe) {
            if(window.confirm("Are you sure you want to delete all recipe?")){
                this.removeItem(savedrecipe);
                window.location.reload(false);
            } 
        }

        
        return (
           
            <div className="App">
                <div className="recipe">
                    <h2>{isi.label}</h2>
                    <img src={isi.image} alt={isi.label}/>
                    <p>Total Calories = {isi.calories.toFixed(2)}</p>
                    <button onClick={() => setShow(!show)}>Ingredients</button>
                    {show && <RecipeDetails ingredients={ingredients}/>}
                    <button onClick={() => localStorage.deleteArray('savedrecipe')}>Delete All Recipe</button>
                </div>
            </div>
            
        );
    })
}
