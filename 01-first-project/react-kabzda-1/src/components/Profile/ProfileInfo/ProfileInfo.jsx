import React from 'react';
import './ProfileInfo.module.css';
import classes from './ProfileInfo.module.css'; // import css module .module.css

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg' />
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo