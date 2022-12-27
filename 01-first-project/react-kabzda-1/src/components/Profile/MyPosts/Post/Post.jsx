import React from 'react';
import './Post.module.css';
import classes from './Post.module.css'; // import css module .module.css

// create Post component
const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src='https://i.pinimg.com/originals/ef/ba/81/efba81733530bdfb1e508e7a8627f63e.jpg' />
            {props.message}
            <div>
                <span>Like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post