import React from 'react';
import RecipeRecommendation from '../RecipeRecommendation/RecipeRecommendation';

const HomeRecommendation = (props) => {
    return (   
        <div>
            <RecipeRecommendation recipes={props.popularRecipes} text="Personalized Recommendation"/>
            <RecipeRecommendation recipes={props.popularRecipes} text="Popular Recipes"/>
        </div>
    )
}

export default HomeRecommendation