import React from 'react';
import './blog.css';
import Article from '../../components/articles/Article.jsx';
import {blog01, blog02, blog03, blog04, blog05} from './imports.js';


function Blog() {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
       <div className='gpt3__blog-heading'>
          <h1 className='gradient-text'>A lot is happening, Ware blogging about it.</h1>
       </div>
       <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
            <Article imageblog={blog01} date="Sep 26, 2024" title="GPT-3 and Open AI is the future. Let us explore how it is?"/>
        </div>
        <div className='gpt3__blog-container_groupB'>
            <Article imageblog={blog02} date="Sep 26, 2024" title="GPT-3 and Open AI is the future. Let us explore how it is?"/>
            <Article imageblog={blog03} date="Sep 26, 2024" title="GPT-3 and Open AI is the future. Let us explore how it is?"/>
            <Article imageblog={blog04} date="Sep 26, 2024" title="GPT-3 and Open AI is the future. Let us explore how it is?"/>
            <Article imageblog={blog05} date="Sep 26, 2024" title="GPT-3 and Open AI is the future. Let us explore how it is?"/>
        </div>
       </div>
    </div>
  )
}

export default Blog
