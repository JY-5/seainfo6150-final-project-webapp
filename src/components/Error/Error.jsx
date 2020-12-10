import React from 'react'
import { useHistory } from "react-router-dom";
import styles from "./Error.module.css";

const Error = () => {
    const history = useHistory();
    return (
        <div className={styles.container}>
            <div>
                <h1>Whoops!</h1>
                <p>We couldn't find the page you are looking for</p>        
                <button onClick={() => history.push('/') } >Go home</button>
            </div>
            <img alt="a bitten donut" src="https://webstockreview.net/images/donut-clipart-bitten-donut-2.jpg"/>
        </div>
    )
}

export default Error
