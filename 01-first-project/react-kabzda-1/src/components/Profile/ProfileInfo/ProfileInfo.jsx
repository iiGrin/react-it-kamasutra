import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import './ProfileInfo.module.css';
import classes from './ProfileInfo.module.css'; // import css module .module.css

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
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