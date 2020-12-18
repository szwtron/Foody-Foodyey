import React, { useState } from 'react';
import Axios from 'axios';
import "../App.css";

import Alert from '../component/Alert';



import 'bootstrap/dist/css/bootstrap.min.css';


const Nutrition = () => {
  const [query, setQuery] = useState("");
  const [nutritions, setNutrition] = useState([]);
  const [alert, setAlert] = useState("");

  const APP_ID = "371ee2f5";

  const APP_KEY = "eac76d10fa563faf06d22cef1bd90bae";

  const nutritionurl = `https://api.edamam.com/api/nutrition-data?app_id=${APP_ID}&app_key=${APP_KEY}&ingr=${encodeURIComponent(query)}`;


  const getData = async () => {
    if (query !== "") {
      const result = await Axios.get(nutritionurl);
      setNutrition(result.data);
      //console.log(result);
      //console.log("bababa"+ nutritions.healthLabels);
      setAlert("");
      setQuery("");
    } else {
      setAlert('Aiyoo whats the food??')
    }


  };

  const onChange = e => {
    setQuery(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getData();

  };
  var testingconsole = Object.values(nutritions);
  
  //console.log(testingconsole.length);

  if(testingconsole.length > 0)  {
    var testingconsole2 = Object.values(nutritions.ingredients[0]);
    if(nutritions.cautions.length === 0){
      nutritions.cautions = "NONE";
    }
    //console.log(testingconsole2);
    return (
      //   {/* APP */}
      <div className="App">
        <div className="containerApp">
          <div className="col">
            <h1>Nutrition Analysis</h1>
            <h3 style={{color:"white"}}>Healthy body comes from a healthy food~</h3>
            <h2>Ex input: 1 large apple, 2 banana and 3 wine, etc</h2>
            <form className="search-form" onSubmit={onSubmit}>
              {alert !== "" && <Alert alert={alert} />}
              <input type="text" placeholder="Wakanda Food U Lookin' For?" autoComplete="off" onChange={onChange} value={query} />
              <input type="submit" value="Find da Foodyy" />
            </form>
          </div>
          <div className="Nutritions">
            <h3>{"Displaying nutritions information for "+ testingconsole2[0]}</h3>
            <br></br>
            <h2>{nutritions.calories + " Calories"}</h2>
            <h2>{nutritions.totalWeight.toFixed(2) + " grams"}</h2>
            <br></br>
            <h2>Allergy Cautions !!</h2>
            <h2>{nutritions.cautions}</h2>
            <br></br>
            <table className="table table-bordered" style={{color:"White"}}>
              <tr>
                <td>{nutritions.totalNutrientsKCal.CHOCDF_KCAL.label}</td>
                <td>{nutritions.totalNutrientsKCal.CHOCDF_KCAL.quantity}</td>
                <td>{nutritions.totalNutrientsKCal.CHOCDF_KCAL.unit}</td>
              </tr>
              <tr>
                <td>{nutritions.totalNutrientsKCal.ENERC_KCAL.label}</td>
                <td>{nutritions.totalNutrientsKCal.ENERC_KCAL.quantity}</td>
                <td>{nutritions.totalNutrientsKCal.ENERC_KCAL.unit}</td>
              </tr>
              <tr>
                <td>{nutritions.totalNutrientsKCal.FAT_KCAL.label}</td>
                <td>{nutritions.totalNutrientsKCal.FAT_KCAL.quantity}</td>
                <td>{nutritions.totalNutrientsKCal.FAT_KCAL.unit}</td>
              </tr>
              <tr>
                <td>{nutritions.totalNutrientsKCal.PROCNT_KCAL.label}</td>
                <td>{nutritions.totalNutrientsKCal.PROCNT_KCAL.quantity}</td>
                <td>{nutritions.totalNutrientsKCal.PROCNT_KCAL.unit}</td>
              </tr>
            </table>

            <br></br>

            <h2>NUTRITION CLAIMS</h2>
            <h2>{nutritions.healthLabels.join(", ").replaceAll('_',' ')}</h2>
            <br></br>
            <table className="table table-bordered" style={{color:"White"}}>

              <tr className="table-secondary" style={{color:"aquamarine"}}>
                <td> &#9679; {nutritions.totalDaily.FAT.label}</td>
                <td>{nutritions.totalDaily.FAT.quantity.toFixed(2) + nutritions.totalDaily.FAT.unit}</td>
                <td>{nutritions.totalNutrients.FAT.quantity.toFixed(2) + nutritions.totalNutrients.FAT.unit}</td>
              </tr>

              <tr>
                <td>{nutritions.totalDaily.FASAT.label}</td>
                <td>{nutritions.totalDaily.FASAT.quantity.toFixed(2) + nutritions.totalDaily.FASAT.unit}</td>
                <td>{nutritions.totalNutrients.FASAT.quantity.toFixed(2) + nutritions.totalNutrients.FASAT.unit}</td>
              </tr>

              <tr className="table-secondary" style={{color:"aquamarine"}}>
                <td> &#9679; {nutritions.totalDaily.CHOCDF.label}</td>
                <td>{nutritions.totalDaily.CHOCDF.quantity.toFixed(2) + nutritions.totalDaily.CHOCDF.unit}</td>
                <td>{nutritions.totalNutrients.CHOCDF.quantity.toFixed(2) + nutritions.totalNutrients.CHOCDF.unit}</td>
              </tr>

              <tr>
                <td>{nutritions.totalDaily.FIBTG.label}</td>
                <td>{nutritions.totalDaily.FIBTG.quantity.toFixed(2)+nutritions.totalDaily.FIBTG.unit}</td>
                <td>{nutritions.totalNutrients.FIBTG.quantity.toFixed(2)+nutritions.totalNutrients.FIBTG.unit}</td>
              </tr>

              <tr>
                <td>{nutritions.totalDaily.ENERC_KCAL.label}</td>
                <td>{nutritions.totalDaily.ENERC_KCAL.quantity.toFixed(2) + nutritions.totalDaily.ENERC_KCAL.unit}</td>
                <td>{nutritions.totalNutrients.ENERC_KCAL.quantity.toFixed(2) + nutritions.totalNutrients.ENERC_KCAL.unit}</td>
              </tr>

              <tr className="table-secondary" style={{color:"aquamarine"}}>
                <td>{nutritions.totalDaily.PROCNT.label}</td>
                <td>{nutritions.totalDaily.PROCNT.quantity.toFixed(2)+nutritions.totalDaily.PROCNT.unit}</td>
                <td>{nutritions.totalNutrients.PROCNT.quantity.toFixed(2)+nutritions.totalNutrients.PROCNT.unit}</td>
              </tr>

              <tr>
                <td>{nutritions.totalDaily.CHOLE.label}</td>
                <td>{nutritions.totalDaily.CHOLE.quantity.toFixed(2) + nutritions.totalDaily.CHOLE.unit}</td>
                <td>{nutritions.totalNutrients.CHOLE.quantity.toFixed(2) + nutritions.totalNutrients.CHOLE.unit}</td>
              </tr>

              <tr>
                <td>{nutritions.totalDaily.NA.label}</td>
                <td>{nutritions.totalDaily.NA.quantity.toFixed(2)+nutritions.totalDaily.NA.unit}</td>
                <td>{nutritions.totalNutrients.NA.quantity.toFixed(2)+nutritions.totalNutrients.NA.unit}</td>
              </tr>

              <tr>
                <td>{nutritions.totalDaily.CA.label}</td>
                <td>{nutritions.totalDaily.CA.quantity.toFixed(2) + nutritions.totalDaily.CA.unit}</td>
                <td>{nutritions.totalNutrients.CA.quantity.toFixed(2) + nutritions.totalNutrients.CA.unit}</td>
              </tr>

              <tr>
                <td>{nutritions.totalDaily.MG.label}</td>
                <td>{nutritions.totalDaily.MG.quantity.toFixed(2)+nutritions.totalDaily.MG.unit}</td>
                <td>{nutritions.totalNutrients.MG.quantity.toFixed(2)+nutritions.totalNutrients.MG.unit}</td>
              </tr>

              <tr>
                <td>{nutritions.totalDaily.K.label}</td>
                <td>{nutritions.totalDaily.K.quantity.toFixed(2)+nutritions.totalDaily.K.unit}</td>
                <td>{nutritions.totalNutrients.K.quantity.toFixed(2)+nutritions.totalNutrients.K.unit}</td>
              </tr>

              <tr>
                <td>{nutritions.totalDaily.FE.label}</td>
                <td>{nutritions.totalDaily.FE.quantity.toFixed(2) + nutritions.totalDaily.FE.unit}</td>
                <td>{nutritions.totalNutrients.FE.quantity.toFixed(2) + nutritions.totalNutrients.FE.unit}</td>
              </tr>

              <tr>
                <td>{nutritions.totalDaily.ZN.label}</td>
                <td>{nutritions.totalDaily.ZN.quantity.toFixed(2)+nutritions.totalDaily.ZN.unit}</td>
                <td>{nutritions.totalNutrients.ZN.quantity.toFixed(2)+nutritions.totalNutrients.ZN.unit}</td>
              </tr>

              <tr>
                <td>{nutritions.totalDaily.P.label}</td>
                <td>{nutritions.totalDaily.P.quantity.toFixed(2)+nutritions.totalDaily.P.unit}</td>
                <td>{nutritions.totalNutrients.P.quantity.toFixed(2)+nutritions.totalNutrients.P.unit}</td>
              </tr>

              <tr>
                <td>{nutritions.totalDaily.VITA_RAE.label}</td>
                <td>{nutritions.totalDaily.VITA_RAE.quantity.toFixed(2)+nutritions.totalDaily.VITA_RAE.unit}</td>
                <td>{nutritions.totalNutrients.VITA_RAE.quantity.toFixed(2)+nutritions.totalNutrients.VITA_RAE.unit}</td>
              </tr>

              <tr>
                <td>{nutritions.totalDaily.VITC.label}</td>
                <td>{nutritions.totalDaily.VITC.quantity.toFixed(2)+nutritions.totalDaily.VITC.unit}</td>
                <td>{nutritions.totalNutrients.VITC.quantity.toFixed(2)+nutritions.totalNutrients.VITC.unit}</td>
              </tr>

              <tr>
                <td>{nutritions.totalDaily.THIA.label}</td>
                <td>{nutritions.totalDaily.THIA.quantity.toFixed(2)+nutritions.totalDaily.THIA.unit}</td>
                <td>{nutritions.totalNutrients.THIA.quantity.toFixed(2)+nutritions.totalNutrients.THIA.unit}</td>
              </tr>

              <tr>
                <td>{nutritions.totalDaily.RIBF.label}</td>
                <td>{nutritions.totalDaily.RIBF.quantity.toFixed(2)+nutritions.totalDaily.RIBF.unit}</td>
                <td>{nutritions.totalNutrients.RIBF.quantity.toFixed(2)+nutritions.totalNutrients.RIBF.unit}</td>
              </tr>

              <tr>
                <td>{nutritions.totalDaily.NIA.label}</td>
                <td>{nutritions.totalDaily.NIA.quantity.toFixed(2)+nutritions.totalDaily.NIA.unit}</td>
                <td>{nutritions.totalNutrients.NIA.quantity.toFixed(2)+nutritions.totalNutrients.NIA.unit}</td>
              </tr>

              <tr>
                <td>{nutritions.totalDaily.VITB6A.label}</td>
                <td>{nutritions.totalDaily.VITB6A.quantity.toFixed(2)+nutritions.totalDaily.VITB6A.unit}</td>
                <td>{nutritions.totalNutrients.VITB6A.quantity.toFixed(2)+nutritions.totalNutrients.VITB6A.unit}</td>
              </tr>

              <tr>
                <td>{nutritions.totalDaily.FOLDFE.label}</td>
                <td>{nutritions.totalDaily.FOLDFE.quantity.toFixed(2)+nutritions.totalDaily.FOLDFE.unit}</td>
                <td>{nutritions.totalNutrients.FOLDFE.quantity.toFixed(2)+nutritions.totalNutrients.FOLDFE.unit}</td>
              </tr>

              <tr>
                <td>{nutritions.totalDaily.VITB12.label}</td>
                <td>{nutritions.totalDaily.VITB12.quantity.toFixed(2)+nutritions.totalDaily.VITB12.unit}</td>
                <td>{nutritions.totalNutrients.VITB12.quantity.toFixed(2)+nutritions.totalNutrients.VITB12.unit}</td>
              </tr>

              <tr>
                <td>{nutritions.totalDaily.VITD.label}</td>
                <td>{nutritions.totalDaily.VITD.quantity.toFixed(2)+nutritions.totalDaily.VITD.unit}</td>
                <td>{nutritions.totalNutrients.VITD.quantity.toFixed(2)+nutritions.totalNutrients.VITD.unit}</td>
              </tr>

              <tr>
                <td>{nutritions.totalDaily.TOCPHA.label}</td> 
                <td>{nutritions.totalDaily.TOCPHA.quantity.toFixed(2)+nutritions.totalDaily.TOCPHA.unit}</td>
                <td>{nutritions.totalNutrients.TOCPHA.quantity.toFixed(2)+nutritions.totalNutrients.TOCPHA.unit}</td>
              </tr>

              <tr>
                <td>{nutritions.totalDaily.VITK1.label}</td>
                <td>{nutritions.totalDaily.VITK1.quantity.toFixed(2)+nutritions.totalDaily.VITK1.unit}</td>
                <td>{nutritions.totalNutrients.VITK1.quantity.toFixed(2)+nutritions.totalNutrients.VITK1.unit}</td>
              </tr>
            </table>

          </div>
        </div>
      </div>
    );
  }else{
    return (

      //   {/* APP */}

      <div className="App">
        <div className="containerApp">
          <div className="col">
            <h1>Nutrition Analysis</h1>
            <h3 style={{color:"white"}}>Healthy body comes from a healthy food~</h3>
            <h2>Ex input: 1 large apple, 2 banana and 3 wine, etc</h2>
            <form className="search-form" onSubmit={onSubmit}>
              {alert !== "" && <Alert alert={alert} />}
              <input type="text" placeholder="Wakanda Food U Lookin' For?" autoComplete="off" onChange={onChange} value={query} />
              <input type="submit" value="Find da Foodyy" />
            </form>
          </div>
          <div className="Nutritions">
            <h2>{ "0 Calories"}</h2>
            <h2>{"0 grams"}</h2>
          </div>
        </div>
      </div>
  
    );
  }
  
};

export default Nutrition;

