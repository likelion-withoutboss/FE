import React, { useState } from 'react';
import front_image from '../image/front_image.png';
import backend_image from '../image/backend_image.png';
import ai_image from '../image/ai_image.png';
import design_image from '../image/design_image.png';

export default function About() {
  const [selectedCategory, setSelectedCategory] = useState('frontend');

  const curriculumData = {
    frontend: {
      imageUrl: front_image,
      title: '프론트엔드 개발',
      description: 'HTML, CSS, JavaScript 및 React를 사용하여 웹 페이지를 구성하고, 사용자 친화적인 UI를 구축하는 기본 및 심화 학습. 반응형 웹 디자인 및 최신 프론트엔드 기술 트렌드를 배우게 됩니다.  실무 프로젝트를 통해 실력을 향상시킬 수 있습니다.'
    },
    backend: {
      imageUrl: backend_image,
      title: '백엔드 개발',
      description: 'Node.js, Python(Django/Flask), Spring Boot 등을 활용하여 서버와 데이터베이스, API 설계 및 보안을 고려하여 웹 애플리케이션의 서버 측을 구성하는 법을 배우는 과정. RESTful API 디자인 및 클라우드 플랫폼 활용법을 익힙니다.  실제 서비스 구축 경험을 쌓을 수 있습니다.'
    },
    ai: {
      imageUrl: ai_image,
      title: '인공지능 (Django)',
      description: 'Python과 머신러닝/딥러닝 라이브러리(TensorFlow, PyTorch)를 사용하여 데이터 분석 및 딥러닝 모델을 구축하고, 인공지능 프로젝트를 기획하고 배포하는 법을 배웁니다.  실제 AI 프로젝트 경험을 쌓을 수 있습니다.  최신 AI 기술 트렌드를 배우게 됩니다.'
    },
    design: {
      imageUrl: design_image,
      title: '기획 / 디자인',
      description: 'Figma를 활용하여 기획과 UI/UX 디자인의 기초를 배우고, 프로토타이핑 및 피드백 반영을 통해 사용자 중심의 디자인을 구축하는 과정. 디자인 시스템 구축 및 사용자 리서치 방법론을 익힙니다.  실제 디자인 프로젝트를 진행하며 포트폴리오를 구축할 수 있습니다.'
    }
  };

  const renderCurriculum = (category) => (
    <div className="bg-white rounded-lg shadow-xl p-8 w-full sm:w-full lg:w-full mx-auto max-w-4xl">
      <img
        src={curriculumData[category].imageUrl}
        alt={`${category} 이미지`}
        className="w-full h-auto max-h-96 object-cover rounded-md mb-6"
      />
      <h2 className="text-3xl font-bold text-gray-800 mb-4">{curriculumData[category].title}</h2> {/* 제목 크기 조정 */}
      <div className="text-gray-700 text-lg leading-relaxed"> {/* description 영역 스타일 추가 */}
        <p>{curriculumData[category].description}</p>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 font-korean">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12 text-center text-orange-500">
        <span className="text-orange-600">멋사</span> 커리큘럼
      </h1>

      <div className="flex flex-wrap justify-center space-x-4 mb-12 w-full max-w-5xl">
        {['frontend', 'backend', 'ai', 'design'].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-3 rounded-lg font-medium hover:bg-orange-100 transition duration-300 focus:outline-none ${
              selectedCategory === category ? 'bg-orange-500 text-white' : 'bg-gray-200 text-orange-500'
            }`}
          >
            {category === 'frontend' ? '프론트엔드' : category === 'backend' ? '백엔드' : category === 'ai' ? '인공지능 (Django)' : '기획 / 디자인'}
          </button>
        ))}
      </div>

      {renderCurriculum(selectedCategory)}
    </div>
  );
}