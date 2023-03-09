// import React, { useRef } from 'react';
import logo from '../assets/images/intro.jpg'
// import Anime from '../assets/Anime';

const Visual = () => {
    return (
        <section className='visual scroll'>
            <div className='inner'>
                {/* 첫인상 남기기 사진 */}
                <img src={logo} alt='visual' />
                {/* Anime 샘플 */}
            </div>
        </section>
    );
};

export default Visual;
