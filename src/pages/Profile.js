import React from 'react';
import profile1 from '../assets/images/profile1.png';
import profile2 from '../assets/images/profile2.png';
import 'aos/dist/aos.css';

const Profile = () => {
    return (
        <section className='profile scroll'>
            <div className='inner'>
                {/* 자기소개(인사팀) 약력, 학력, 업무, 교육, 성격, MBTI */}
                <h2 data-aos='fade-up'>Profile</h2>
                <div
                    className='contents'
                    data-aos='fade-up'
                    data-aos-duration='1000'
                    data-aos-delay='500'
                >
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
