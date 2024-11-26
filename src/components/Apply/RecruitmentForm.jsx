import React from 'react';

const RecruitmentForm = ({ title, fields }) => {
  const realOrange = '#FF7710';
  const boldBlack = '#1C1B1A';
  const accentYellow = '#FFC600';

  return (
    <div className="p-8 bg-white rounded-lg shadow-md w-full max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center text-boldBlack">{title}</h2> {/* 폰트 색상 변경 */}
      <form>
        {fields.map((field, index) => (
          <div key={index} className="mb-4">
            <label htmlFor={field.name} className="block text-gray-700 font-bold mb-2">
              {field.label}
            </label>
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder={field.placeholder}
              required
            />
          </div>
        ))}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-realOrange hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" // 색상 변수 사용
            style={{ backgroundColor: realOrange }} // 색상 변수 사용
          >
            제출
          </button>
        </div>
      </form>
    </div>
  );
};

export default RecruitmentForm;