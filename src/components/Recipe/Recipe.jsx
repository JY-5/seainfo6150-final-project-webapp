import React from 'react';
import { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import styles from "./Recipe.module.css";
import roastedChicken1 from "../../assets/images/roastedChicken1.jpg";
import roastedChicken2 from "../../assets/images/roastedChicken2.jpg";
import roastedChicken3 from "../../assets/images/roastedChicken3.jpg";

const Recipe = ({ recipe }) => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
      
    return (
        <div className={styles.container}>
            {recipe ?
                (<>
                <h2 className={styles.title}>{recipe["title"]}</h2>
                <div>
                    {(recipe.id === "1") ?
                    (<img className={styles.responsive}
                        srcSet={roastedChicken3 + " 300w, " + roastedChicken2 + " 600w," + roastedChicken1 + " 1200w"} 
                        sizes="(max-width: 320px) 70vw,
                                (max-width: 500px) 70vw,
                                (max-width: 600px) 50vw,
                                30vw"
                        src={roastedChicken3} alt={recipe["title"]}/>)
                    : (<div className={styles.imageContainer}>
                        <img className={styles.image} src={recipe.url} alt={recipe["title"]}/>
                        </div>
                        )}
                    <h3>Ingredients</h3>
                    <p>{recipe["ingredients"]}</p>
                </div>
                <div>
                <h3>Instructions</h3>
                <ul>
                {Object.keys(recipe["instructions"]).map(step => 
                    (
                        <li key={step}>
                            <h4>{step}</h4>
                            <p>{recipe["instructions"][step]}</p>
                        </li>
                    )
                )}
                </ul>
            </div>
            </>)
            : null
            }
        </div>
    )
}

export default Recipe

