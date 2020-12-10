import React from 'react';
import {
    BrowserRouter as Router,
    useParams
  } from "react-router-dom";
import CategoryRecipes from '../CategoryRecipes/CategoryRecipes';
import styles from "./CategoryPage.module.css";

const CategoryPage = ({ categories, allRecipes }) => {
    let { categoryId } = useParams();

    const categoryName = categories[categoryId];
    return (
        <div className={styles.container}>
        {allRecipes ?
            (allRecipes[categoryId] ?
                <CategoryRecipes text={`Recipes for ${categoryName}`} recipes={Object.values(allRecipes[categoryId])} categoryId={categoryId}/> 
                : <h2>Coming soon...</h2>)
            : null
        }
        </div>
    )
}

export default CategoryPage
