import React, { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { isEmpty } from "lodash";
import Home from "../components/Home/Home.jsx";
import Error from "../components/Error/Error.jsx";
import Login from "../components/Login/Login";
import logo from "../assets/images/logo.png";
import Recipe from "../components/Recipe/Recipe";
import AddRecipe from "../components/AddRecipe/AddRecipe";
import Footer from '../components/Footer/Footer';
import styles from './App.module.css';
import SearchResult from '../components/SearchResult/SearchResult';
import { withRouter } from 'react-router';

function App(props) {
  const [categories, setCategories] = useState({});
  const [popularRecipes, setPopularRecipes] = useState({"0": {title: '', id: '', url: ''}}); 
  const[ifLoggedIn, setIfLoggedIn] = useState(false);
  const [searchInput, setSearchInput] = useState(''); 
  const [username, setUsername] = useState('');
  const [allRecipes, setAllRecipes] = useState();

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("https://run.mocky.io/v3/b7be0f81-1822-4557-8f68-f65c022a2966");
      const responseJson = await response.json();
      setCategories(responseJson["Categories"]);
    };

    if (isEmpty(categories)) {
        fetchCategories();
    }

    const fetchPopularRecipes = async () => {
      const response = await fetch("https://run.mocky.io/v3/f5ee7031-c75e-41ea-9540-d59408af8803");
      const responseJson = await response.json();
      setPopularRecipes(responseJson);
      };
      fetchPopularRecipes();

      const fetchRecipes = async () => {
        const response = await fetch("https://run.mocky.io/v3/9d96b81a-b6e2-4c25-bbcd-63772f60140f");
        const responseJson = await response.json();
        setAllRecipes(responseJson);
    };
    fetchRecipes();
    }, []);

    const changeLogIn = (username) => {
      setIfLoggedIn(!ifLoggedIn);
      setUsername(username);
    }

  const onChangeSearch = (e) => {
    setSearchInput(e.target.value);
  }

  return (
    <div className={styles.app}>     
          <nav className={styles.nav}>
            <ul className={styles.ul}>
              <li className={styles.logoPanel}>
                <Link to="/" className={styles.logoLink}>
                  <img className={styles.logo} src={logo} alt="treasured recipes"/>
                </Link>
                <Link to="/" className={styles.logoName}>
                  <span className={styles.name}>Recipes</span>
                </Link>
              </li>

              <li className={styles.searchPanel}>
                <input className={styles.search} type="text" name="search" onChange={onChangeSearch} value={searchInput}/>
                <Link to={`/recipes/${searchInput}`} className={styles.searchLink} >
                  Search
                </Link>
              </li>
              <li className={styles.addLi}>
                <Link to="/newRecipe" className={styles.addNew}>
                  Add a new recipe
                </Link>
              </li>  
              <li className={styles.logLi}>      
                {ifLoggedIn ?
                  <button onClick={changeLogIn} className={styles.logout}>Log out</button> :
                  <Link to="/login" className={styles.login}>Log in</Link>
                }
              </li>
            </ul>
          </nav>
      <div className={styles.right}>
      <Switch>
        <Route path="/login" exact render={() => <Login changeLogIn={changeLogIn} />}/>
        <Route path="/recipes/:name" render={({ match }) => <SearchResult searchWord={searchInput} header={`Recipes result of ${match.params.name}`}/>} />
        <Route path="/recipes/" render={() => <SearchResult searchWord={searchInput} header='All recipes: '/>} />
        <Route path="/newRecipe" exact render={() => (
          ifLoggedIn ?
          <AddRecipe username={username} ifLoggedIn={ifLoggedIn}/> : props.history.push('/login'))}/> 
        <Route 
          path="/recipe/:recipeId"
          exact
          render={({ match }) => (
            <Recipe
              recipeId={match.params.recipeId} recipe={popularRecipes[match.params.recipeId]}
            />
          )}
        />
        <Route 
          path="/categories/:categoryId/:recipeId"
          exact
          render={({ match }) => (
            <Recipe
              recipeId={match.params.recipeId} recipe={allRecipes[match.params.categoryId][match.params.recipeId]} 
            />
          )}
        />
        <Route path="/" render={() => <Home categories={categories} popularRecipes={Object.values(popularRecipes)} allRecipes={allRecipes}/>}/>
        <Route path="/404page" component={Error} />
      </Switch>
      </div>
      <div className={styles.footer}>
        <Footer/>
      </div>
    </div>
  );
}

export default withRouter(App);
