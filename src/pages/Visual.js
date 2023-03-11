// import React, { useRef } from 'react';
import logo from '../assets/images/intro.jpg';
// import Anime from '../assets/Anime';

const Visual = () => {
    return (
        <section className='visual scroll'>
            <div className='inner'>
                <div className='intro'>
                    <img src={logo} alt='visual' />
                    <p>
                        어떠한 요구사항에도
                        <br />
                        " 그건 좀 어려울 것 같습니다 " 가 아닌
                        <br />
                        <span>" 네 가능합니다, 문제 없습니다. "</span> 라고 대답할
                        수 있는
                        <br />
                        <span>친절</span>하고 <span>유능</span>한 개발자가
                        되겠습니다.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Visual;
