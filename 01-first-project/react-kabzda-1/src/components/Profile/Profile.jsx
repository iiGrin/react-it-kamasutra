import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import './Profile.module.css';
import classes from './Profile.module.css'; // import css module .module.css

const Profile = () => {
    return <div>
        <div>
            <img src='https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg'/>
        </div>
        <div>
            ava + disc
        </div>
        <MyPosts/>
    </div>
}

export default Profile