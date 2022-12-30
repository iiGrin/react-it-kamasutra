import React from 'react';
import './MyPosts.module.css';
import classes from './MyPosts.module.css'; // import css module .module.css
import Post from './Post/Post';

const MyPosts = () => {

    let posts = [
        { id: 1, message: 'Hi. How are you?', likesCount: 12 },
        { id: 2, message: 'Its my first post', likesCount: 11 },
    ]
    // auto adding post from posts array 
    let postsElements = posts.map(post => <Post message={post.message} likesCount={post.likesCount} />)

    return (
        <div className={classes.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts