import React from 'react';
import './Profile.module.css';
import Profile from './Profile'
import { connect } from 'react-redux';
import { getUserProfile } from './../../Redux/ProfileReducer'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const ProfileContainer = (props) => {

    const params = useParams()

    if (!params.userId) {
        params.userId = 2
    }
    useEffect(() => {
        props.getUserProfile(params.userId)
    })

    return (
        <Profile profile={props.profile} />
    )
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})



export default connect(mapStateToProps, { getUserProfile })(ProfileContainer)