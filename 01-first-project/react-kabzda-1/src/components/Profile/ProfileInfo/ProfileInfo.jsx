import React from 'react';
import './ProfileInfo.module.css';
import classes from './ProfileInfo.module.css'; // import css module .module.css
import { Navigate } from 'react-router-dom';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Navigate to='/login' />
    }

    return (
        <div>
            <div>
                <img src='https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg' alt='' />
            </div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large} alt=''/>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo