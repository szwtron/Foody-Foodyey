import React from 'react';
import Axios from 'axios';

const APP_KEY="3e4bb2443b8c305910d3e494f5498dc7";

class FullRecipe extends React.Component {
    state = {
        activeRecipe: []
    }
    componentDidMount = async () => {
        
        // const label = this.props.location.state.FullRecipe;
        // const req = await fetch
        
        // // const result = await Axios.get(url);
        // // const url =`https://api.edamam.com/search?q=${query}=&app_id=${APP_ID}&app_key=${APP_KEY}`;
        // console.log(result);
        // const res = await req.json();
        // console.log(label);
    }
    render() {
        console.log(this.props);
        return (
            <div>Full Recipe Component</div>
        );
    }
}

export default FullRecipe;