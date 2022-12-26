import React from 'react';
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

const Navbar = () => {
    return <nav className={classes.nav}>
        <div className={classes.item}>
            <a>Profile</a>
        </div>
        <div className={`${classes.item} ${classes.active}`}>
            <a>Messages</a>
        </div>
        <div className={classes.item}>
            <a>News</a>
        </div>
        <div className={classes.item}>
            <a>Music</a>
        </div>
        <div className={classes.item}>
            <a>Settings</a>
        </div>
        <div></div>
        <div></div>
    </nav>
}

export default Navbar