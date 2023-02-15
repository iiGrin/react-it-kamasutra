import React from 'react';
import './Profile.module.css';
import Profile from './Profile'
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from './../../Redux/ProfileReducer'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const ProfileContainer = (props) => {

    const params = useParams()

    if(!params.userId) {
         params.userId = 2
    }
    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${params.userId}`)
            .then(response => {
                props.setUserProfile(response.data)
            })
    })

    return (
        <Profile profile={props.profile} />
    )
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})



export default connect(mapStateToProps, { setUserProfile })(ProfileContainer)