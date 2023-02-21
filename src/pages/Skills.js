import React from 'react';
import css from '../assets/images/skill-css.png';
import html from '../assets/images/skill-html.png';
import js from '../assets/images/skill-js.png';
import react from '../assets/images/skill-react.png';
import redux from '../assets/images/skill-redux.png';
import sass from '../assets/images/skill-sass.png';
import type from '../assets/images/skill-type.png';

const Skills = () => {
    return (
        <section className='skills'>
            <div className='inner'>
                <h2>Skills</h2>
                <div className='contents'>
                    <ul className='skills-list'>
                        <li>
                            <img src={html} alt='html' />
                        </li>
                        <li>
                            <img src={css} alt='css' />
                        </li>
                        <li>
                            <img src={js} alt='js' />
                        </li>
                        <li>
                            <img src={react} alt='react' />
                        </li>
                        <li>
                            <img src={redux} alt='redux' />
                        </li>
                        <li>
                            <img src={sass} alt='sass' />
                        </li>
                        <li>
                            <img src={type} alt='sass' />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Skills;
