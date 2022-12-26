import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import './Profile.module.css';
import classes from './Profile.module.css'; // import css module .module.css

const Profile = () => {
    return <div className={classes.content}>
        <div>
            <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' />
        </div>
        <div>
            ava + disc
        </div>
        <MyPosts />
    </div>
}

export default Profile