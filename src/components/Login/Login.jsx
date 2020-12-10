import React from 'react';
import { useState } from 'react';
import { Link, useRouteMatch } from "react-router-dom";
import styles from './Login.module.css';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);
    const [isPending, setIsPending] = useState(false);

    const onChange = (e) => {
        setUsername(e.target.value);
        setIsDisabled(!e.target.value);
    };

    const login = () => {
        setIsPending(true);
        setIsPending(false);
        props.changeLogIn(username);
    };

    let { url } = useRouteMatch();

    return (
        <div className={styles.login}>
            <div className={styles.input}>
                <label className={styles.usernameLabel}>Username: 
                    <input className={styles.username} disabled={isPending} onChange={onChange} type="text"/>
                </label>
                <label className={styles.passwordLabel}>Password: 
                    <input className={styles.password} disabled={isPending} type="password"/>
                </label>   
                <Link to={`${url}`} className={styles.loginButton} onClick={login} disabled={isDisabled || isPending} >{ isPending ? "..." : "Login"}</Link>
            </div>             
        </div>
    )
}

export default Login