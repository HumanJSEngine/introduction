import React from 'react';
import life from '../assets/images/life.png';

const Life = () => {
    return (
        <section className='life scroll'>
            <div className='inner'>
                <h2>Life</h2>
                <div className='contents'>
                    <ul className='life-list'>
                        <li>
                            <img src={life} alt='' />
                        </li>
                        <li>
                            <img src={life} alt='' />
                        </li>
                        <li>
                            <img src={life} alt='' />
                        </li>
                        <li>
                            <img src={life} alt='' />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Life;
