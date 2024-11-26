import React, { useState } from 'react';
import RecruitmentForm from './RecruitmentForm';

const Apply = () => {
  const [activeForm, setActiveForm] = useState(null); // 초기값 null

  const adminFields = [
    { name: 'adminName', label: '이름', type: 'text', placeholder: '이름을 입력하세요' },
    { name: 'adminContact', label: '연락처', type: 'text', placeholder: '연락처를 입력하세요' },
    { name: 'adminPosition', label: '지원 분야', type: 'text', placeholder: '지원 분야를 입력하세요' },
    { name: 'adminEmail', label: '이메일', type: 'email', placeholder: '이메일 주소를 입력하세요' },
    { name: 'adminExperience', label: '경력', type: 'textarea', placeholder: '경력을 입력하세요' },
  ];

  const cubFields = [
    { name: 'cubName', label: '이름', type: 'text', placeholder: '이름을 입력하세요' },
    { name: 'cubAge', label: '학번', type: 'number', placeholder: '학번을 입력해주세요.' },
    { name: 'cubInterest', label: '전공', type: 'text', placeholder: '전공을 입력하세요' },
    { name: 'cubInterest', label: '관심 분야', type: 'text', placeholder: '관심 분야를 입력하세요' },
    { name: 'cubEmail', label: '이메일', type: 'email', placeholder: '이메일 주소를 입력하세요' },
    
  ];


  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-8">모집 지원</h1>
      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => setActiveForm('admin')}
          className={`px-6 py-3 rounded-lg border border-gray-300 hover:border-gray-500 ${activeForm === 'admin' ? 'bg-blue-500 text-white' : 'bg-white'}`}
        >
          운영진 모집
        </button>
        <button
          onClick={() => setActiveForm('cub')}
          className={`px-6 py-3 rounded-lg border border-gray-300 hover:border-gray-500 ${activeForm === 'cub' ? 'bg-blue-500 text-white' : 'bg-white'}`}
        >
          아기사자 모집
        </button>
      </div>
      {activeForm && (
        <RecruitmentForm title={activeForm === 'admin' ? '운영진 모집' : '아기사자 모집'} fields={activeForm === 'admin' ? adminFields : cubFields} />
      )}
    </div>
  );
};

export default Apply;