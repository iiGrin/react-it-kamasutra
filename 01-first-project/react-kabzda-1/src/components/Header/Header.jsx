import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css' // import css module .module.css

const Header = (props) => {
    return <header className={classes.header}>
        <img src='https://i.pinimg.com/originals/e9/e2/78/e9e2787d0cb55d570fe1c76843506759.jpg' alt='' />

        <div className={classes.loginBlock}>
            { props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header