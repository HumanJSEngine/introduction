/** @format */

import React from 'react';

import 'aos/dist/aos.css';

import { FcPhoneAndroid } from 'react-icons/fc';
import { SiGmail } from 'react-icons/si';
import bmj from '../assets/images/bmj.jpeg';

const Profile = () => {
  return (
    <section className="profile scroll">
      <div className="inner">
        <p className="profiletitle" data-aos="fade-up">
          Profile
        </p>
        <div
          className="contents"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <div className="profileleft">
            <img className="bmjimg" src={bmj} alt="bmjimg" />
            <div className="bmj">
              <p>배민준</p>
              <p>함께하고 싶은 FE 개발자</p>
              <ul className="skillicons">
                <li>
                  <img src="https://skillicons.dev/icons?i=html" alt="" />
                </li>
                <li>
                  <img src="https://skillicons.dev/icons?i=css" alt="" />
                </li>
                <li>
                  <img src="https://skillicons.dev/icons?i=js" alt="" />
                </li>
                <li>
                  <img src="https://skillicons.dev/icons?i=react" alt="" />
                </li>
                <li>
                  <img src="https://skillicons.dev/icons?i=ts" alt="" />
                </li>
                <li>
                  <img src="https://skillicons.dev/icons?i=redux" alt="" />
                </li>
                <li>
                  <img
                    src="https://skillicons.dev/icons?i=styledcomponents"
                    alt=""
                  />
                </li>
                <li>
                  <img src="https://skillicons.dev/icons?i=vite" alt="" />
                </li>
              </ul>
            </div>
          </div>
          <div className="profileright">
            <span>
              <FcPhoneAndroid />
              010-4457-1627
            </span>
            <span>
              <SiGmail />
              bmj44571627@gmail.com
            </span>
            <span>
              <img src="https://skillicons.dev/icons?i=github" alt="" />
              <a
                href="https://github.com/HumanJSEngine?tab=repositories"
                alt="경로"
              >
                깃허브
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
