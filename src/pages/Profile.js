import React from 'react';
import profile1 from '../assets/images/profile1.png';
import profile2 from '../assets/images/profile2.png';

const Profile = () => {
    return (
        <section className='profile'>
            <div className='inner'>
                <h2>Profile</h2>
                <div className='contents'>
                    <div className='profile-box'>
                        <img src={profile1} alt='프로필1' />
                    </div>
                    <div className='profile-box'>
                        <img src={profile2} alt='프로필2' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;
