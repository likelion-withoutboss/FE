// src/components/HeroSection.js
import React from 'react';
import likelionlogo from "../image/likelion_cuk.png";

function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-white py-12 px-4 md:px-8 lg:px-16 mb-8">
      {/* 텍스트 영역 */}
      <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0 pl-10">
        <h1 className="text-4xl font-bold text-[#1C1B1A] mb-4 font-pretendard " >멋사 with CUK</h1>
        <p className="text-gray-700 text-lg font-montserrat">어서와 ~ 가톨릭대는 처음이지?</p>
      </div>

      {/* 이미지 영역 */}
      <div className="md:w-1/2 flex justify-center md:justify-end">
  <img
    src={likelionlogo} 
    alt="CATHOLIC UNIVERSITY OF KOREA"
    className="w-100 h-100 object-contain" 
  />
</div>

    </section>
  );
}

export default HeroSection;
