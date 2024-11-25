import React from 'react';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-3xl font-bold text-boldBlack mb-6 text-center">로그인</h2>
        <form> {/* onSubmit 이벤트 제거 */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">이메일</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-realOrange focus:border-realOrange"
              placeholder="이메일 주소를 입력하세요"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">비밀번호</label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-realOrange focus:border-realOrange"
              placeholder="비밀번호를 입력하세요"
            />
          </div>
          <div className="mb-4">
            <button
              type="button" 
              className="w-full bg-realOrange text-white font-bold py-2 px-4 rounded hover:bg-orange-700 focus:outline-none focus:shadow-outline"
            >
              로그인
            </button>
          </div>
          <div className="text-center text-gray-500 text-xs">
            <p>계정이 없으신가요? <a href="#" className="text-realOrange hover:underline">회원가입</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;