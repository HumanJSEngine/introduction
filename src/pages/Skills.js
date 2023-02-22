import React from 'react';
import css from '../assets/images/skill-css.png';
import html from '../assets/images/skill-html.png';
import js from '../assets/images/skill-js.png';
import react from '../assets/images/skill-react.png';
import redux from '../assets/images/skill-redux.png';
import sass from '../assets/images/skill-sass.png';
import type from '../assets/images/skill-type.png';
import 'aos/dist/aos.css';

const Skills = () => {
    return (
        <section className='skills scroll'>
            <div className='inner'>
                <h2>Skills</h2>
                <div className='contents'>
                    <ul className='skills-list'>
                        <li>
                            <img
                                src={html}
                                alt='html'
                                data-aos='fade-up'
                                data-aos-duration='300'
                                data-aos-delay='600'
                            />
                        </li>
                        <li>
                            <img
                                src={css}
                                alt='css'
                                data-aos='fade-up'
                                data-aos-duration='300'
                                data-aos-delay='800'
                            />
                        </li>
                        <li>
                            <img
                                src={js}
                                alt='js'
                                data-aos='fade-up'
                                data-aos-duration='300'
                                data-aos-delay='1000'
                            />
                        </li>
                        <li>
                            <img
                                src={react}
                                alt='react'
                                data-aos='fade-up'
                                data-aos-duration='300'
                                data-aos-delay='1200'
                            />
                        </li>
                        <li>
                            <img
                                src={redux}
                                alt='redux'
                                data-aos='fade-up'
                                data-aos-duration='300'
                                data-aos-delay='1400'
                            />
                        </li>
                        <li>
                            <img
                                src={sass}
                                alt='sass'
                                data-aos='fade-up'
                                data-aos-duration='300'
                                data-aos-delay='1600'
                            />
                        </li>
                        <li>
                            <img
                                src={type}
                                alt='sass'
                                data-aos='fade-up'
                                data-aos-duration='300'
                                data-aos-delay='1800'
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Skills;
