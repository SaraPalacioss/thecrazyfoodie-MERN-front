import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const RecipesContext = createContext();

const GetRecipes = (props) => {

    const [recipes, saveRecipes] = useState([]);
    const [search, searchRecipes] = useState({
        name: '',
        category: ''
    })
    const [review, saveReview] = useState(false);

    useEffect(() => {
        if(review) {
            const getAllRecipes = async()=> {
                const URL = process.env.REACT_APP_BASE_URL;
                const result = await axios.get(URL);
                console.log(result.data)
            }
        }
        getAllRecipes();
    }, [search])


    return (  
        <h1>Get GetRecipies</h1>
    );
}
 
export default Re;