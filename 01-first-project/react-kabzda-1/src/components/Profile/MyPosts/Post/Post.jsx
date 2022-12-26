import React from 'react';
import './Post.module.css';
import classes from './Post.module.css'; // import css module .module.css

// create Post component
const Post = () => {
    return (
        <div className={classes.item}>
            <img src='https://i.pinimg.com/originals/ef/ba/81/efba81733530bdfb1e508e7a8627f63e.jpg' />
            Post1
            <div>
            <span>Like</span>
            </div>
        </div>
    )
}

export default Post