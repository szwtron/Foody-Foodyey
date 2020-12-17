import React, {useState} from 'react';
import Axios from 'axios';
import {v4 as uuidv4} from 'uuid';
import "../App.css";

import Alert from '../component/Alert';
import HighRecipe from '../component/FilterSearch/High-protein'


import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");


  const APP_ID="d0a7124d";

  const APP_KEY="3e4bb2443b8c305910d3e494f5498dc7";

  const url =`https://api.edamam.com/search?q=${query}=&app_id=${APP_ID}&app_key=${APP_KEY}`;
  
  const getData = async () => {
    if (query !== ""){
      const result = await Axios.get(url);
      if(!result.data.more){
        return setAlert("Excuse me? never heard such a name")
      }
      setRecipes(result.data.hits)
      console.log(result);
      setAlert("");
      setQuery("");
    }else {
      setAlert('Aiyoo whats the food??')
    }

    
  };

  const onChange = e => {
    setQuery(e.target.value);
  };

  const onSubmit = (e) =>{
    e.preventDefault();
    getData();

  };

  return (

      //   {/* APP */}
        
      <div className="LowApp">
       <div className="containerApp">
         <div className="col">
           <h1>High-Protein Food!</h1>
           <h2>Build those MUSCLE! SAIDO CHESTOOO!</h2>
           <form className="search-form" onSubmit={onSubmit}>
             {alert !== "" && <Alert alert={alert}/>}
             <input type="text" placeholder="Wakanda Food U Lookin' For?" autoComplete="off" onChange={onChange} value={query}/>
             <input type="submit" value="High Protein Only"/>
           </form>
         </div>
         <div className="recipes">
           {recipes !== [] && recipes.map(recipe => <HighRecipe key={uuidv4()}  recipe= {recipe}/>)}
         </div>
       </div>
     </div>


      
  );
};



export default App;

