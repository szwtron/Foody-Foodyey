import React, {useState} from 'react';

const Nutrients = ({nutrient}) => {
    console.log(nutrient);
    return( 
    <div className="nutrients">
        <h2>{nutrient.calories}</h2>
    </div>
    );  

};

export default Nutrients;
