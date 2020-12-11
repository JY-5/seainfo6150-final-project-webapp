import React from 'react'
import styles from './Home.module.css';
import { Switch, Route, Link } from "react-router-dom";
import HomeRecommendation from '../HomeRecommendation/HomeRecommendation';
import Error from '../Error/Error';
import CategoryPage from '../CategoryPage/CategoryPage';
import { useEffect } from 'react';
import { useLocation } from "react-router-dom";

const Home = (props) => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className={styles.container}>  
            <div className={styles.left}> 
                <nav>
                    <h2 className={styles.header}>
                       Recipe Categories
                    </h2>
                    <ul className={styles.ul}>
                        {Object.keys(props.categories).map((id) => (
                            <li key={id} className={styles.li}>
                                <Link to={`/categories/${id}`} className={styles.link}>
                                    {props.categories[id]}
                                </Link>
                            </li>
                        ))}

                    </ul>
                </nav>
            </div>
            <div className={styles.right}>
                <Switch>
                    <Route exact path='/'>
                        <HomeRecommendation popularRecipes={props.popularRecipes}/>
                    </Route>
                    <Route path={"/categories/:categoryId"} 
                     render={()=> <CategoryPage categories={props.categories} allRecipes={props.allRecipes}/>}/>
                    <Route component={Error} />
                </Switch>
            </div>
        </div>
    )
}

export default Home
