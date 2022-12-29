import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import './Profile.module.css';
import classes from './Profile.module.css'; // import css module .module.css
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts />
        </div>
    )
}

export default Profile