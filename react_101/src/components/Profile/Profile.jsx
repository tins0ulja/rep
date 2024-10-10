import React from 'react';
import s from './Profile.module.css'

const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSN5kyGXRsJTnCvfM371Ycg8u7k9viw1gW-g&s'></img>
        </div>
        <div>
            ava + description
        </div>
        <div>
            My Posts
            <div>
                New Post
            </div>
            <div className='posts'>
                <div className='item'>post 1</div>
                <div className='item'>post 2</div>
            </div>
        </div>

    </div>
}

export default Profile;