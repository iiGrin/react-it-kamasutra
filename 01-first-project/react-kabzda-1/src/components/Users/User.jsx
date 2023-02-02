import React from "react";
import styles from './Users.module.css'

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://cms.nhl.bamgrid.com/images/photos/325860980/1024x576/cut.jpg',
                followed: false,
                fullName: 'Dmitry',
                status: 'Im a boss', location: { city: 'Minsk', country: 'Belarus' }
            },
            {
                id: 2,
                photoUrl: 'https://cms.nhl.bamgrid.com/images/photos/325860980/1024x576/cut.jpg',
                followed: true,
                fullName: 'Sasha',
                status: 'Im a boss too',
                location: { city: 'Moscow', country: 'Russia' }
            },
            {
                id: 3,
                photoUrl: 'https://cms.nhl.bamgrid.com/images/photos/325860980/1024x576/cut.jpg',
                followed: false,
                fullName: 'Andrew',
                status: 'Im a boss too',
                location: { city: 'Kiev', country: 'Ukrane' }
            }
        ]
        )
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.usersPhoto} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users