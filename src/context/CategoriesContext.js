import React, { createContext, useState } from 'react';
import axios from 'axios';

export const CategoriesContext = createContext();

const GetCategory = (props) => {

    const [category, saveCategory] = useState([]);

    useEffect(() => {
        const getCategories = async ()=> {
            const URL = `${process.env.REACT_APP_BASE_URL}filter.php?c=${category}`
            const category = await axios.get(URL);
            console.log(category.data)
        }
        getCategories();
    }, [])

    return (  
        <CategoriesContext.Provider
            value={{category}}
        >
        {props.children}
        </CategoriesContext.Provider>
    );
    
}

export default GetCategory;

