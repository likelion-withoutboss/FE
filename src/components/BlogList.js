// src/components/BlogList.js
import React from 'react';

const posts = [
  { id: 1, title: '000해커톤 일정!', excerpt: '아니 이게 뭐임', imageUrl: 'https://via.placeholder.com/80' },
  { id: 2, title: '000해커톤 일정!', excerpt: '아니 이게 뭐임', imageUrl: 'https://via.placeholder.com/80' },
  { id: 3, title: '000해커톤 일정!', excerpt: '아니 이게 뭐임', imageUrl: 'https://via.placeholder.com/80' },
  { id: 4, title: '000해커톤 일정!', excerpt: '아니 이게 뭐임', imageUrl: 'https://via.placeholder.com/80' },
  { id: 5, title: '000해커톤 일정!', excerpt: '아니 이게 뭐임', imageUrl: 'https://via.placeholder.com/80' },
  { id: 6, title: '000해커톤 일정!', excerpt: '아니 이게 뭐임', imageUrl: 'https://via.placeholder.com/80' },
];

function BlogList() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-3xl font-bold text-center mb-6">우리의 공지사항</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-4 rounded-lg shadow-lg flex items-center">
            <img
              src={post.imageUrl}
              alt="포스트 썸네일"
              className="w-20 h-20 object-cover rounded-md mr-4"
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-boldBlack">{post.title}</h3>
              <p className="text-gray-600 text-sm">{post.excerpt}</p>
              <div className="mt-3 flex space-x-2">
                <button className="text-sm font-semibold text-realOrange">좋아요</button>
                <button className="text-sm font-semibold text-realOrange">댓글</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
