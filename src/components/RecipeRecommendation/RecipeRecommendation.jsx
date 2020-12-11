import React from 'react'
import styles from "./RecipeRecommendation.module.css";
import { Link } from 'react-router-dom';

const RecipeRecommendation = (props) => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>{props.text}</header>
            <ul className={styles.recommendation}>
                {props.recipes.map((recipe) => (
                    <li key={recipe.id} className={styles.li}>
                        <Link to={`/recipe/${recipe.id}`} className={styles.title}>
                        <img className={styles.image} src={recipe.url} alt={recipe.title} />
                        </Link>
                        <Link to={`/recipe/${recipe.id}`} className={styles.link}>
                        {recipe.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RecipeRecommendation
