import React, {useState} from 'react';
import Axios from 'axios';
import {v4 as uuidv4} from 'uuid';
import "./App.css";

import Recipe from "./component/Recipe";
import Alert from './component/Alert';



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
        
      <div className="App">
       <div className="containerApp">
         <div className="col">
           <h1>Foody Foodyay</h1>
           <h2>Explore the world of food!</h2>
           <form className="search-form" onSubmit={onSubmit}>
             {alert !== "" && <Alert alert={alert}/>}
             <input type="text" placeholder="Wakanda Food U Lookin' For?" autoComplete="off" onChange={onChange} value={query}/>
             <input type="submit" value="Find da Foodyy"/>
           </form>
         </div>
         <div className="recipes">
           {recipes !== [] && recipes.map(recipe => <Recipe key={uuidv4()}  recipe= {recipe}/>)}
         </div>
       </div>
     </div>

  );
};



export default App;

