import React from 'react';
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import sample from '../assets/images/sample1.png';

const Portfolio = () => {
    return (
        <section className='portfolio scroll'>
            <div className='inner'>
                {/* 개발담당자 : 팀프로젝트, 개인 작업(5개 목표(퍼블리싱 > 프론트)) */}
                <h2 data-aos='fade-up'>Portfolio</h2>
                <div className='contents'>
                    <div className='project'>
                        <div className='pinfo'>
                            <iframe
                                id='inlineFrameExample'
                                title='Inline Frame Example'
                                width='700'
                                height='400'
                                src='https://user-images.githubusercontent.com/103413040/223362125-f9ffb27c-29b4-45b3-b91c-d050722efeec.mp4'
                            ></iframe>

                            <div className='pinforight'>
                                <p>미니 교보문고(토이프로젝트)</p>
                                <span>
                                    작업시기 - 2022.12.3주 ~ 2022.12.4주
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
