import React from 'react'
import styles from "./Search.module.css";

const Search = () => {
    return (
        <div>        
            <input className={styles.search} type="text" name="search"/>
            <input className={styles.button} type="submit" value="Search" />
        </div>
    )
}

export default Search