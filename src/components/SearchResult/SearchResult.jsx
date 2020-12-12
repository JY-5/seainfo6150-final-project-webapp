import React, { useState, useEffect } from 'react'
import styles from "./SearchResult.module.css";

const SearchResult = (props) => {
    const[recipesFound, setRecipesFound] = useState([{title: '', id: '', url: ''}]);
    useEffect(() => {
        const fetchRecipes = async () => {
            // search according to the search keyword
            const response = await fetch("https://run.mocky.io/v3/c4071e7b-ec14-45bc-8ca3-6115283e9689");
            const responseJson = await response.json();
            setRecipesFound(Object.values(responseJson));
            };
            fetchRecipes();
    }, []);

    return (
        <div className={styles.result}>        
            <h3>{props.header}</h3>
            <ul className={styles.list}>
                {recipesFound.map((recipe) => (
                    <li key={recipe.id} className={styles.li}>
                        <img className={styles.image} src={recipe.url} alt={recipe.title} />
                        <p className={styles.title}>{recipe.title}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SearchResult