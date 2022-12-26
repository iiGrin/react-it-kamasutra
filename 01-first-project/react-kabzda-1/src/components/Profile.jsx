import React from 'react';
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
        <div>
            my post
            <div>
                new post
            </div>
            <div className={classes.posts}>
                <div className={classes.item}>
                    post1
                </div>
                <div className={classes.item}>
                    post2
                </div>
            </div>
        </div>
    </div>
}

export default Profile