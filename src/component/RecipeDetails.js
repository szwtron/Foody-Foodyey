import React from 'react'
import {v4 as uuidv4} from 'uuid'

const RecipeDetails = ({ingredients}) => {
    return ingredients.map(ingredients => {
        return(
            <ui key={uuidv4()}className="ingredient-list">
                <li className="ingredient-text">{ingredients.text}</li>
                <li className="ingredient-weight">Weight - {ingredients.weight.toFixed(2)}</li>
            </ui>
        )

    });    
};
export default RecipeDetails;
