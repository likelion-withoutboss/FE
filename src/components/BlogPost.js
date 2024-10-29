// src/components/BlogPost.js
import React from 'react';
import { useParams } from 'react-router-dom';

const postData = {
  1: { title: '강', content: '강에 대한 설명입니다.' },
  2: { title: '지', content: '지에 대한 설명입니다.' },
  3: { title: '웅', content: '웅에 대한 설명입니다.' },
};

function BlogPost() {
  const { postId } = useParams();
  const post = postData[postId];

  return (
    <article className="mt-10 bg-boldBlack p-8 rounded-lg shadow-md text-white font-korean">
      <h2 className="text-3xl font-bold text-realOrange mb-4">{post?.title || '포스트 제목'}</h2>
      <p className="text-accentYellow leading-relaxed mb-6">
        {post?.content || '포스트 내용이 없습니다.'}
      </p>
    </article>
  );
}

export default BlogPost;
