/** @format */

import React from 'react';

const Life = () => {
  return (
    <section className="life scroll">
      <div className="inner">
        <p className='edutitle'>Education</p>
        <div className="contents">
          <div className="edu">
            <p>그린아트아카데미 수료</p>
            <div className="eduinner">
              <span>수강기간</span>
              <span>2022.10 ~ 2023.04</span>
              <span>과정명</span>
              <span>
                기업요구를 반영한 프로젝트 중심 프론트엔드 React(리액트) 개발자
                양성과정
              </span>
            </div>
          </div>
          <div className="edu">
            <p>영남대학교 졸업</p>
            <div className="eduinner">
              <span>졸업년도</span>
              <span>2020.08</span>
              <span>전공</span>
              <span>무역학과</span>
            </div>
          </div>
          <div className="edu">
            <p>영어 (OPIC)</p>
            <div className="eduinner">
              <span>취득일</span>
              <span>2022.8</span>
              <span>등급</span>
              <span>IH</span>
            </div>
          </div>
          <div className="edu">
            <p>정보처리기사 필기 합격</p>
            <div className="eduinner">
              <span>취득일자</span>
              <span>2022.08</span>
              <span>향후 일정</span>
              <span>23-1회 기사 실기 준비 중</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Life;
