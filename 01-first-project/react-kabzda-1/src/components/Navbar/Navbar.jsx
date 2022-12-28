import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css'; // import css module .module.css

// let classes = {
//     'nav': 'Navbar_nav__33io0Q',
//     'item': 'Navbar_item__43vkF3'
//     'active': 'Blalala_active'
// }

// let classes1 = 'item'
// let classes2 = 'active'
//     'item active'
// let classes = classes1 + ' ' + classes2
//  let classesNew = `${classes.item} ${classes.active}`

// create active/nActive function
const setClass = ({ isActive }) => isActive ? classes.active : classes.item

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/profile' className={setClass}>Profile</NavLink>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to='/dialogs' className={setClass}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='news' className={setClass}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='music' className={setClass}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='settings' className={setClass}>Settings</NavLink>
            </div>
            <div></div>
            <div></div>
        </nav>
    )
}

export default Navbar