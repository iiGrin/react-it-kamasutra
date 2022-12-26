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
            <button>Remove</button>
            
            </div>
            <div className={classes.posts}>
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default MyPosts