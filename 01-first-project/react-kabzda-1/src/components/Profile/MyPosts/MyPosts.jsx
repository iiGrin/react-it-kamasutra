import React from 'react';
import './MyPosts.module.css';
import classes from './MyPosts.module.css'; // import css module .module.css
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            my post
            <div>
            <textarea></textarea>
            <button>Add post</button>
            
            </div>
            <div className={classes.posts}>
                <Post message='Hi. How are you?' likesCount='1'/>
                <Post message='Its my first post' likesCount='23'/>
            </div>
        </div>
    )
}

export default MyPosts